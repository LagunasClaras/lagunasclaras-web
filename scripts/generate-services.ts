import { writeFile } from 'fs/promises';
import { join } from 'path';
import { servicesMock } from '../src/content/servicesMock';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

const outputDir = join(process.cwd(), 'src/content/services');

async function generate() {
  console.log('Generating service content files...');

  for (const service of servicesMock) {
    const id = slugify(service.title);
    const fileName = `${id}.json`;
    const filePath = join(outputDir, fileName);

    // We add the original ID to the data, but the file name is the collection ID
    const content = JSON.stringify(
      {
        ...service,
        originalId: service.id,
      },
      null,
      2
    );

    await writeFile(filePath, content);
    console.log(`Created ${fileName}`);
  }

  console.log('Done!');
}

generate().catch(console.error);
