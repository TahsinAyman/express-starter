import { type Middleware } from "@/lib/types";

export const logger: Middleware = (req, res, next) => {
  const start = Date.now();
  console.log(`🔄 ${req.method} ${req.url}`);
  res.on("finish", () => {
    const duration = Date.now() - start;
    const symbol = res.statusCode >= 400 && res.statusCode <= 599 ? "❌" : "✅";
    console.log(`${symbol} ${req.method} ${req.url} - ${duration}ms`);
  });
  next();
};
