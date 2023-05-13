import { authRouter } from "./router/auth";
import { printRouter } from "./router/print";
import { productRouter } from "./router/product";
import { receptionRouter } from "./router/reception";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
