import styled from "styled-components";

interface WallpaperProps {
  imageUrl: string; // Define the imageUrl prop
}

const StylecardImage = styled.img`
  width: 200px;
`;

const StyleDetailsImage = styled.img`
  width: 600px;
`;

const Wallpaper = styled.div<WallpaperProps>`
  width: 100vw;

  background-image: url(${(props) => props.imageUrl});
  background-size: repeat-y;
  background-position: center;
`;

export { StylecardImage, StyleDetailsImage, Wallpaper };
