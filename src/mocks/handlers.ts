// mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { products } from "../data/product.json"; // your local mock data array
import type { FilterPayload } from "../utils/constant";

export const handlers = [
  http.post("/api/filter", async ({ request }) => {
    const body = (await request.json()) as FilterPayload;
    let data = products.items;
    console.log(body);
    if (body?.categories?.length > 0) {
      const allLabels = body.categories.reduce((acc, item) => {
        return [...acc, ...item.label];
      }, [] as string[]);
      data = data.filter((item) => allLabels.includes(item.type));
    }

    if (body?.colors?.length > 0) {
      data = data.filter((item) => body.colors.includes(item.color));
    }

    if (body?.sizes?.length > 0) {
      data = data.filter((item) => body.sizes.includes(item.size));
    }

    data = data.filter(
      (item) => item.price >= body?.price[0] && item.price <= body?.price[1]
    );

    const page = body.page || 1;
    const pageSize = 9;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const pagedData = data.slice(start, end);

    return HttpResponse.json({
      data: pagedData,
      total: data.length, // tổng tất cả
    });
  }),
];
