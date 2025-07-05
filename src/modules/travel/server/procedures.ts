import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { db } from "@/db/drizzle";
import { and, desc, eq, lt, or } from "drizzle-orm";
import { citySets } from "@/db/schema/photos";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const travelRouter = createTRPCRouter({
  getLatestTravel: baseProcedure.query(async () => {
    const [latestTravel] = await db.query.citySets.findMany({
      with: {
        photos: true,
        coverPhoto: true,
      },
      orderBy: desc(citySets.createdAt),
      limit: 1,
    });

    return latestTravel;
  }),
  getCitySets: baseProcedure
    .input(
      z.object({
        cursor: z
          .object({
            id: z.string().uuid(),
            updatedAt: z.date(),
          })
          .nullish(),
        limit: z.number().min(1).max(100).default(10),
      })
    )
    .query(async ({ input }) => {
      const { cursor, limit } = input;

      const data = await db.query.citySets.findMany({
        with: {
          coverPhoto: true,
          photos: true,
        },
        where: cursor
          ? or(
              lt(citySets.updatedAt, cursor.updatedAt),
              and(
                eq(citySets.updatedAt, cursor.updatedAt),
                lt(citySets.id, cursor.id)
              )
            )
          : undefined,
        orderBy: [desc(citySets.updatedAt)],
        limit: limit + 1,
      });

      const hasMore = data.length > limit;
      // Remove the last item if there is more data
      const items = hasMore ? data.slice(0, -1) : data;
      // Set the next cursor to the last item if there is more data
      const lastItem = items[items.length - 1];
      const nextCursor = hasMore
        ? {
            id: lastItem.id,
            updatedAt: lastItem.updatedAt,
          }
        : null;

      return { items, nextCursor };
    }),
  updateCitySetDescription: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        description: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, description } = input;

      try {
        const [updatedCitySet] = await db
          .update(citySets)
          .set({
            description,
            updatedAt: new Date(),
          })
          .where(eq(citySets.id, id))
          .returning();

        if (!updatedCitySet) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "City set not found",
          });
        }

        return updatedCitySet;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update city set description",
        });
      }
    }),
});
