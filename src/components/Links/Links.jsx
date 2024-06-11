import Link from "next/link"

export default function Links ({url, children}) {
  return(
  <Link href={url}>
    {children}
  </Link>
  )
}