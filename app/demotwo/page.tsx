import { notFound } from 'next/navigation';
import { getHtmlData } from './getHtmlData';
import DemotwoLoader from '@/components/DemotwoLoader';

export async function generateMetadata() {
  const data = getHtmlData([]);
  if (!data) return { title: 'Demotwo Home' };
  return {
    title: data.title,
  };
}

export default function DemotwoHome() {
  const data = getHtmlData([]);
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
