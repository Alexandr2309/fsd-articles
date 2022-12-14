import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface LangSwitcherProps {
  className?: string;
  short: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggleLang}
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
    >
      {short ? t('Язык') : t('Перевод')}
    </Button>
  );
});
