import { ISection2TableData, section2TableData } from "@/constant/home/section-2";

export interface ISection2TableDataResponse {
  data: ISection2TableData[];
  isLastPage: boolean;
  totalPage: number;
}

export async function GET(request: Request) {
  const dataPerPage = 8;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "0");
  const data = section2TableData.slice(page * dataPerPage, (page + 1) * dataPerPage);
  return Response.json({
    data,
    isLastPage: (page + 2) * dataPerPage > section2TableData.length,
    totalPage: Math.ceil(section2TableData.length / dataPerPage),
  } as ISection2TableDataResponse);
}
