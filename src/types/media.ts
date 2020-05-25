export interface MediaProps {
  url: string;
  formats: {
    large: {
      ext: string;
      height: number;
      url: string;
      width: number;
    };
    medium: {
      ext: string;
      height: number;
      url: string;
      width: number;
    };
    small: {
      ext: string;
      height: number;
      url: string;
      width: number;
    };
    thumbnail: {
      ext: string;
      height: number;
      url: string;
      width: number;
    };
  };
}
