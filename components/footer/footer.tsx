import Link from 'next/link';
import Image from 'next/image';
import { Stack, Typography, Container } from '@mui/material';
import styles from './footer.module.css';
import youtube from '../../public/assets/footer/youtube.svg';
import vk from '../../public/assets/footer/vk.svg';
import facebook from '../../public/assets/footer/facebook.svg';
import insta from '../../public/assets/footer/insta.svg';
import logoSVG from '../../public/assets/icons/logo.svg';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <Stack component="footer" className={styles.footer} direction="column">
      <Container maxWidth="xl">
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          padding="110px 50px 135px"
        >
          <Stack>
            <Typography
              variant="body1"
              className={montserrat.className}
              textTransform="uppercase"
            >
              SUPPORT
            </Typography>
            <Stack gap="11px" marginTop="30px">
              <Link href="#">Contact Us</Link>
              <Link href="#">FAQ</Link>
            </Stack>
          </Stack>

          <Stack>
            <Typography
              variant="body1"
              className={montserrat.className}
              textTransform="uppercase"
            >
              About
            </Typography>
            <Stack gap="11px" marginTop="30px">
              <Link href="#">Our Story</Link>
              <Link href="#">Press</Link>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body1"
              className={montserrat.className}
              textTransform="uppercase"
            >
              Mountain
            </Typography>
            <Stack gap="11px" marginTop="30px">
              <Link href="#">Cross Country</Link>
              <Link href="#">Trail</Link>
              <Link href="#">Downhill</Link>
              <Link href="#">Dirt Jump</Link>
              <Link href="#">Frames</Link>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body1"
              className={montserrat.className}
              textTransform="uppercase"
            >
              Road
            </Typography>
            <Stack gap="11px" marginTop="30px">
              <Link href="#">Performance</Link>
              <Link href="#">Gravel</Link>
              <Link href="#">Cyclocross</Link>
              <Link href="#">Triathlon</Link>
              <Link href="#">Frames</Link>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body1"
              className={montserrat.className}
              textTransform="uppercase"
            >
              Active
            </Typography>
            <Stack gap="11px" marginTop="30px">
              <Link href="#">Fitness</Link>
              <Link href="#">Transport</Link>
              <Link href="#">Comfort</Link>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body1"
              className={montserrat.className}
              textTransform="uppercase"
            >
              Kids
            </Typography>
            <Stack gap="11px" marginTop="30px">
              <Link href="#">Toddler</Link>
              <Link href="#">Little kids</Link>
              <Link href="#">Big kids</Link>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body1"
              className={montserrat.className}
              textTransform="uppercase"
            >
              City
            </Typography>
            <Stack gap="11px" marginTop="30px">
              <Link href="#">Road</Link>
              <Link href="#">Mountain</Link>
              <Link href="#">Active</Link>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body1"
              className={montserrat.className}
              textTransform="uppercase"
            >
              Clients
            </Typography>
            <Stack gap="11px" marginTop="30px">
              <Link href="#">About us</Link>
              <Link href="#">Delivery</Link>
              <Link href="#">Payment</Link>
              <Link href="#">Contacts</Link>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="body1"
              className={montserrat.className}
              textTransform="uppercase"
            >
              Contacts
            </Typography>
            <Stack gap="11px" marginTop="30px">
              <Link href="#">+7 (495) 829-12-59</Link>
              <Link href="#">info@sitename.ru</Link>
              <Stack direction="row" spacing={1}>
                <Link href="#">
                  <Image src={youtube} alt="youtube" />
                </Link>
                <Link href="#">
                  <Image src={vk} alt="vk" />
                </Link>
                <Link href="#">
                  <Image src={facebook} alt="facebook" />
                </Link>
                <Link href="#">
                  <Image src={insta} alt="instagram" />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          padding="0 50px"
          alignItems="center"
          marginBottom="25px"
        >
          <Link href="/">
            <Image src={logoSVG} alt="logo" />
          </Link>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            flexGrow="1"
            rowGap="10px"
          >
            <p>© 2023, Specialized bicycle components, All rights reserved </p>
            <p>Public offer </p>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
