import { ISection5News, section5News } from "@/constant/home/section-5";

export interface ISection5NewsResponse {
  data: ISection5News;
  isLastPage: boolean;
  totalPage: number;
}

export async function GET(request: Request) {
  const dataPerPage = 8;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "0");
  const data = {
    ...section5News,
    news: section5News.news.slice(page * dataPerPage, (page + 1) * dataPerPage),
  };
  return Response.json({
    data,
    isLastPage: (page + 2) * dataPerPage > section5News.news.length,
    totalPage: Math.ceil(section5News.news.length / dataPerPage),
  } as ISection5NewsResponse);
}
