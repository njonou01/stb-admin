export interface CarouselOptions {
  itemsPerView: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  infiniteScroll: boolean;
  autoScroll: boolean;
  autoScrollInterval: number;
  showButtons: boolean;
  showIndicators: boolean;
  itemSpacing: number;
  scrollItems: number;
}
