export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  alternative?: string;
  icon?: any;
  url?: string;
}
