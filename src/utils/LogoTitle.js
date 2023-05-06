import { Image } from "react-native";

function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 , marginRight: 10 }}
        source={{
            uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
          }}
      />
    );
  }

  export default LogoTitle;