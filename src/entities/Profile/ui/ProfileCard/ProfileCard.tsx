import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { getProfileReadonly, Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { useSelector } from 'react-redux';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/CurrencySelect/model/types/currency';
import { CurrencySelect } from 'entities/CurrencySelect';
import { Country, CountrySelect } from 'entities/CountrySelect';
import cls from './ProfileCard.module.scss';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (valur: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);

  const {
    className,
    data,
    isLoading,
    error,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте перезагрзуить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar
              src={data?.avatar}
              alt={t('Аватарка')}
            />
          </div>
        )}
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('Ваш город')}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t('Возраст')}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Имя пользователя')}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Аватар')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          onChange={onChangeCurrency}
          value={data?.currency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          onChange={onChangeCountry}
          value={data?.country}
          readonly={readonly}
        />
      </div>
    </div>
  );
};