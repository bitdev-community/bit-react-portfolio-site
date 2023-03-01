import React from 'react';
import { Icons } from '@showoff/personal-portfolio.ui.social.icons';
import { MarginType, Margin } from '@showoff/design.layouts.margin';
import { LinkText } from '@showoff/design.navigation.link-text';
import { Breadcrumb } from '@showoff/design.navigation.breadcrumb';
import { Typography } from '@showoff/design.typography.typography';
import { ContactForm } from '@showoff/contact-me.ui.contact-form';
import { Artwork } from '@showoff/contact-me.ui.artwork';
import { Box, Grid, GridProps } from '@mui/material';

export type ContactPageProps = {
  socialLinks: {
    name: 'twitter' | 'github' | 'linkedin' | 'website';
    url: string;
  }[],
  email: string,
} & GridProps;

export function ContactPage({ email, socialLinks, ...rest }: ContactPageProps) {
  const handleFormSubmit = async () => {
    // TODO: Implement form submit
  };

  return (
    <Grid container
      spacing={5}
      {...rest}
    >
      <Grid item
        xs={12}
        md={6}
        sm={12}
      >
        <Breadcrumb
          crumbs={[
            { crumb: 'Contact.' },
          ]}
        />
        <Margin
          mt={MarginType.MEDIUM}
        >
          <Typography
            variant="body2"
            fontSize={18}
          >
            Get in touch or shoot me an email directly on <b>{email}</b>
          </Typography>
        </Margin>
        <Margin
          mt={MarginType.MEDIUM}
        >
          <ContactForm
            onSubmit={handleFormSubmit}
          />
        </Margin>
        <Margin
          mt={MarginType.LARGE}
        >
          <Box>
            <LinkText
              linkText="Go to my homepage"
              url="/"
              fontSize={16}
              fontWeight={400}
              iconSize="medium"
              color="secondary"
            />
          </Box>
        </Margin>
        <Margin
          mt={MarginType.MEDIUM}
        >
          <Icons
            links={socialLinks}
          />
        </Margin>
      </Grid>
      <Grid item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
          },
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '75%',
          width: '75%',
          ml: 15,
          mt: 2,
        }}>
          <Artwork />
        </Box>
      </Grid>
    </Grid>
  );
}
