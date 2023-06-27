interface Image {
  url: string;
  id: string;
}

interface Video {
  isEnabled: boolean;
  url: string;
}

export interface MediaSettings {
  image: Image;
  video: Video;
}
