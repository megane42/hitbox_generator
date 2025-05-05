import { Box, Container, ListItemText, ListItem, List, Typography, Link } from '@mui/material';
import { useState } from 'react';
import CameraOpenButton from "@/components/CameraOpenButton";
import ImageCanvas from '@/components/ImageCanvas';
import ImageSelectButton from '@/components/ImageSelectButton';
import ShareButton from '@/components/ShareButton';
import { useHomePage } from '@/pages/HomePage/useHomePage';
import GitHubIcon from '@mui/icons-material/GitHub';

const HomePage = () => {
  const { imageUrl, onImageGiven, isDefault } = useHomePage();
  const [canvas, setCanvas] = useState<HTMLCanvasElement | undefined>();

  return (
    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", gap: 6, mt: 4, mb: 8 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h1" component="h1">
          Hitbox Generator
        </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ width: "100%" }}>
            <ImageCanvas
              imageUrl={imageUrl}
              isDefault={isDefault}
              onCanvasReady={setCanvas}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <CameraOpenButton text="Open Camera" onImageTaken={onImageGiven} />
            <ImageSelectButton text="Select Image" onImageSelect={onImageGiven} />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <ShareButton text="Share" canvas={canvas}/>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h2" component="h2">
          About
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <List sx={{ listStyleType: 'disc', p: 0, pl: 2 }}>
            <ListItem sx={{ display: 'list-item', p: 0 }}>
              <ListItemText primary="All image processing is done on the device. Therefore, no image is sent to the server. / 画像処理は全て手元の端末上で行われます。つまり、画像は一切サーバーに送信されません。" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', p: 0 }}>
              <ListItemText primary="For any issues that may occur in this application, the author is not responsible. / このアプリケーションで発生したいかなる問題についても、作者は責任を負いません。" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', p: 0 }}>
              <ListItemText primary={
                <Link href="https://streamlinehq.com" target="_blank" rel="noopener noreferrer">
                  Free icons from Streamline. / アイコンは Streamline のものを使用しています。
                </Link>
              } />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
        <Link href="https://github.com/megane42/hitbox_generator" target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={{ fontSize: 40, color: 'black' }} />
        </Link>
      </Box>
    </Container>
  );
};

export default HomePage;
