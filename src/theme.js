import { createSystem, defineConfig, defaultBaseConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50:  { value: '#EFF4FD' }, // light blue tint (hover backgrounds)
          100: { value: '#C7D9F8' },
          200: { value: '#9FBEF3' },
          300: { value: '#6B9AEC' },
          400: { value: '#4A80E8' },
          500: { value: '#2563EB' }, // primary — Search button
          600: { value: '#1D52C4' },
          700: { value: '#1640A0' },
          800: { value: '#0F2F7A' },
          900: { value: '#091E52' },
        },
        neutral: {
          0:   { value: '#FFFFFF' }, // card background
          50:  { value: '#F3F4F6' }, // page background
          100: { value: '#E5E7EB' }, // card border / dividers
          200: { value: '#D1D5DB' }, // input border
          300: { value: '#9CA3AF' }, // source labels (TREEHUGGER, etc.)
          400: { value: '#6B7280' }, // date text
          500: { value: '#374151' }, // body / excerpt text
          600: { value: '#1F2937' }, // card title
          700: { value: '#111827' }, // hero heading, nav brand
        },
      },
      fonts: {
        heading: { value: `'Roboto Slab', serif` },
        heading_2: { value: `'Roboto', serif` },
        body:    { value: `'Source Sans 3', sans-serif` },
      },
      fontSizes: {
        xs:   { value: '0.75rem'  }, // 12px — source labels
        sm:   { value: '0.875rem' }, // 14px — dates, captions
        md:   { value: '1rem'     }, // 16px — body text
        lg:   { value: '1.125rem' }, // 18px — card titles
        xl:   { value: '1.25rem'  }, // 20px
        '2xl':{ value: '1.5rem'   }, // 24px
        '3xl':{ value: '1.875rem' }, // 30px
        '4xl':{ value: '2.25rem'  }, // 36px — hero heading
        '5xl':{ value: '3rem'     }, // 48px
      },
      fontWeights: {
        normal:   { value: '400' },
        medium:   { value: '500' },
        semibold: { value: '600' },
        bold:     { value: '700' },
      },
      radii: {
        sm:   { value: '0.25rem'  }, // 4px
        md:   { value: '0.5rem'   }, // 8px  — cards
        lg:   { value: '0.75rem'  }, // 12px
        xl:   { value: '1rem'     }, // 16px — search bar
        full: { value: '9999px'   }, // pill — Search button, Sign in, Show more
      },
      shadows: {
        card: { value: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)' },
        cardHover: { value: '0 4px 12px rgba(0,0,0,0.12)' },
      },
      spacing: {
        // matches the generous whitespace visible in the design
        'section-y': { value: '3rem'  }, // 48px vertical section padding
        'card-p':    { value: '1.25rem'}, // 20px inner card padding
      },
    },

    semanticTokens: {
      colors: {
        // Background
        'bg.page':         { value: '{colors.neutral.50}' },
        'bg.card':         { value: '{colors.neutral.0}'  },
        'bg.hero':         { value: 'rgba(0,0,0,0.45)'    }, // dark overlay on hero image

        // Text
        'text.heading':    { value: '{colors.neutral.700}' },
        'text.body':       { value: '{colors.neutral.500}' },
        'text.muted':      { value: '{colors.neutral.400}' }, // dates
        'text.source':     { value: '{colors.neutral.300}' }, // TREEHUGGER, NATIONAL GEOGRAPHIC
        'text.onDark':     { value: '{colors.neutral.0}'   }, // hero text

        // Border
        'border.card':     { value: '{colors.neutral.100}' },
        'border.input':    { value: '{colors.neutral.200}' },

        // Interactive
        'action.primary':        { value: '{colors.brand.500}' },
        'action.primaryHover':   { value: '{colors.brand.600}' },
        'action.primaryText':    { value: '{colors.neutral.0}' },
        'action.secondary':      { value: 'transparent'        }, // Sign in outline button
        'action.secondaryBorder':{ value: '{colors.neutral.0}' },
        'action.secondaryText':  { value: '{colors.neutral.0}' },

        // Bookmark
        'bookmark.bg':     { value: '{colors.neutral.0}'   },
        'bookmark.icon':   { value: '{colors.neutral.600}' },
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);