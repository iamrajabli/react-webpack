import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

export const BugButton: FC<BugButtonProps> = ({ className }) => {
  const [hasError, setHasError] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (hasError) throw new Error();
  }, [hasError]);

  const throwHandler = () => setHasError(true);

  return <button onClick={throwHandler}>{t('bug-btn-text')}</button>;
};
