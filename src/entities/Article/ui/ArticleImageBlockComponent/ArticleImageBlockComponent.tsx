import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

export interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({
  className,
  block,
}: ArticleImageBlockComponentProps) => (
  <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
    <img src={block.src} alt={block.title} className={cls.img} />
    {block.title && (
      <Text text={block.title} align={TextAlign.CENTER} />
    )}
  </div>
);
