import treeIcon from '../../assets/icons/copper-medal.svg';
import bronzeIcon from '../../assets/icons/copper-medal.svg';
import silverIcon from '../../assets/icons/silver-medal.svg';
import goldIcon from '../../assets/icons/gold-medal.svg';
export type BadgeType = 'TREE' | 'BRONZE' | 'SILVER' | 'GOLD';
export const badgeIconMap: Record<BadgeType, string> = {
  TREE: treeIcon,
  BRONZE: bronzeIcon,
  SILVER: silverIcon,
  GOLD: goldIcon,
} as const;
