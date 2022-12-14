import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

export interface ProfilePageHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const user = useSelector(getUserAuthData);
  const profile = useSelector(getProfileData);
  const canEdit = user?.id === profile?.id;

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit
        && (
          <div>
            {readonly ? (
              <Button
                theme={ThemeButton.OUTLINED}
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.Edit"
              >
                {t('Редактировать')}
              </Button>
            )
              : (
                <HStack gap="8">
                  <Button
                    theme={ThemeButton.OUTLINED_RED}
                    onClick={onCancelEdit}
                    data-testid="EditableProfileCardHeader.Cancel"
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    theme={ThemeButton.OUTLINED}
                    onClick={onSave}
                    data-testid="EditableProfileCardHeader.Save"
                  >
                    {t('Сохранить')}
                  </Button>
                </HStack>
              )}
          </div>
        )}
    </HStack>
  );
};
