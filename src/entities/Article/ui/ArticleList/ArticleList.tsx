import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import {
  ArticleListItemSkeleton,
} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 3 : 9)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton
      key={index}
      view={view}
      className={cls.card}
    />
  ));

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = ArticleView.SMALL,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      className={cls.card}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
};
