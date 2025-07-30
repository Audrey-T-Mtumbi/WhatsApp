import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// WhatsApp color system
				'whatsapp-green': 'hsl(var(--whatsapp-green))',
				'whatsapp-green-dark': 'hsl(var(--whatsapp-green-dark))',
				'whatsapp-green-light': 'hsl(var(--whatsapp-green-light))',
				'whatsapp-teal': 'hsl(var(--whatsapp-teal))',
				
				// Backgrounds
				background: 'hsl(var(--background))',
				'chat-background': 'hsl(var(--chat-background))',
				'sidebar-background': 'hsl(var(--sidebar-background))',
				'message-background': 'hsl(var(--message-background))',
				
				// Text colors
				foreground: 'hsl(var(--foreground))',
				'text-secondary': 'hsl(var(--text-secondary))',
				'text-muted': 'hsl(var(--text-muted))',
				'text-light': 'hsl(var(--text-light))',
				
				// Message bubbles
				'message-incoming': 'hsl(var(--message-incoming))',
				'message-outgoing': 'hsl(var(--message-outgoing))',
				'message-hover': 'hsl(var(--message-hover))',
				
				// UI Elements
				border: 'hsl(var(--border))',
				'border-light': 'hsl(var(--border-light))',
				divider: 'hsl(var(--divider))',
				hover: 'hsl(var(--hover))',
				active: 'hsl(var(--active))',
				
				// Status colors
				online: 'hsl(var(--online))',
				away: 'hsl(var(--away))',
				offline: 'hsl(var(--offline))',
				
				// Chat specific
				'chat-header': 'hsl(var(--chat-header))',
				'input-background': 'hsl(var(--input-background))',
				timestamp: 'hsl(var(--timestamp))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
