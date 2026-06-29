import { notFound } from 'next/navigation';
import { getHtmlData } from '../getHtmlData';
import DemotwoLoader from '@/components/DemotwoLoader';

interface DemotwoSlugPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: DemotwoSlugPageProps) {
  const { slug } = await params;
  const data = getHtmlData(slug);
  if (!data) return { title: 'Smile Care' };
  return {
    title: data.title,
  };
}

export default async function DemotwoSlugPage({ params }: DemotwoSlugPageProps) {
  const { slug } = await params;
  const data = getHtmlData(slug);
  if (!data) {
    notFound();
  }

  return (
    <>
      {/* Inject external stylesheets */}
      {data.stylesheets.map((linkHtml, i) => (
        <div key={`link-${i}`} dangerouslySetInnerHTML={{ __html: linkHtml }} />
      ))}

      {/* Inject inline styles */}
      {data.inlineStyles.map((styleHtml, i) => (
        <div key={`style-${i}`} dangerouslySetInnerHTML={{ __html: styleHtml }} />
      ))}

      {/* Load layout and execute page scripts */}
      <DemotwoLoader bodyContent={data.bodyContent} bodyClass={data.bodyClass} />
    </>
  );
}
