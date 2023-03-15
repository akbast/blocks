import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import "./index.css";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";

  const lines = content.split(/\r\n|\r|\n/);
  let ownerEntries = []
  for (const line of lines) {
    if (line.startsWith("#")) {
      continue;
    }
    const [path, ...owners] = line.split(/\s+/);
    ownerEntries.push({ owners, path });

    
  }

  ownerEntries = ownerEntries.reverse();

  return (
    <Box p={4}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={6}
        overflow="hidden"
      >
        <Box
          bg="canvas.subtle"
          p={3}
          borderBottomWidth={1}
          borderBottomStyle="solid"
          borderColor="border.default"
        >
          File: {context.path} {language}
        </Box>
        <Box p={4}>
          <p>Use json to draw some graphics</p>
          content: {content}
          <p>ownerEntries: {JSON.stringify(ownerEntries)}</p>
        </Box>
      </Box>
    </Box>
  );
}