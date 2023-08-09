import Button from '@mui/material/Button';
import Image from 'next/image';

export default function NetworkIcon({
  source,
  text,
}: {
  source: string;
  text: string;
}) {
  return (
    <Button
      variant="outlined"
      color="inherit"
      sx={{ width: '100%', p: 1 }}
      startIcon={
        <Image
          src={`/assets/logo/${source}.svg`}
          width={20}
          height={20}
          alt="google"
        />
      }
    >
      {text}
    </Button>
  );
}
