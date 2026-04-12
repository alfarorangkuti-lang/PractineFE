import ClientComponent from "./ClientComponent"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ searchParams }: Props) {
  const rawId = searchParams.ids

  const ids = rawId

  return <ClientComponent ids={ids} />
}