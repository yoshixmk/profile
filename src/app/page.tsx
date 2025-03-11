import { redirect } from 'next/navigation';

type PageProps = Readonly<{
  params: Promise<{
    lang: string
  }>
}>

export default function Home(props: PageProps = { params: Promise.resolve({ lang: 'en' }) }) {
  redirect('./en');
}
