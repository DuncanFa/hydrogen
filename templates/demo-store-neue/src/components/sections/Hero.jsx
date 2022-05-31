import {Image, Video, Link} from '@shopify/hydrogen';
import {Heading, Text} from '../elements';
import {hero as mockData} from '~/lib/placeholders';

export default function Hero({data = mockData, height, top}) {
  const {title, byline, cta, url, spread, spread_secondary, text_color} = data;

  return (
    <Link to={url.value}>
      <section
        className={`relative justify-end flex flex-col w-full ${top &&
          '-mt-nav'} ${height === 'full' ? 'h-screen' : 'h-[50rem]'}`}
      >
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          {spread?.reference && <SpreadMedia data={spread.reference} />}
          {spread_secondary?.reference && (
            <SpreadMedia data={spread_secondary.reference} />
          )}
        </div>
        <div className="flex flex-col items-baseline justify-between gap-4 px-12 py-8 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast">
          <Heading
            as="h2"
            width="narrow"
            size="display"
            className="max-w-prose-narrow"
          >
            {title.value}
          </Heading>
          <Text format width="narrow" as="p" size="lead">
            {byline.value}
          </Text>
          <Link to={cta.url}>
            <Text size="lead">{cta.value}</Text>
          </Link>
        </div>
      </section>
    </Link>
  );
}

function SpreadMedia({data}) {
  if (data.mediaContentType === 'VIDEO') {
    return (
      <Video
        width={1200}
        height={1600}
        alt={data.alt || 'Marketing Banner Video'}
        className="block object-cover w-full h-full"
        data={data}
        muted
        loop
        playsInline
        autoPlay
      />
    );
  }

  if (data.mediaContentType === 'IMAGE') {
    return (
      <Image
        width={1200}
        height={1600}
        alt={data.alt || 'Marketing Banner Image'}
        className="block object-cover w-full h-full"
        data={data.image}
      />
    );
  }

  return null;
}