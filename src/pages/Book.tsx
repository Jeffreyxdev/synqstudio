import { useEffect, useRef, useState } from 'react';
import heroBg from '../assets/hero_background.png';
import ogimg from '../assets/ogimg.png';
import Logo from '../assets/logo.png'
const Book = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const calendlyRef = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        script.setAttribute('async', 'true');
        head?.appendChild(script);

        return () => {
            // leave script in head for caching; no-op cleanup
        };
    }, []);

    // SEO: inject meta tags, canonical, og, twitter, and JSON-LD structured data
    useEffect(() => {
        const prevTitle = document.title;
        const origin = typeof window !== 'undefined' ? window.location.origin : '';
        const url = typeof window !== 'undefined' ? window.location.href : 'https://synqstudio.xyz/book';
        const ogImage = origin + ogimg;

        document.title = 'Book a 30-minute call — Synq Studio';

        const created: HTMLElement[] = [];

        const upsertMeta = (key: 'name' | 'property', k: string, content: string) => {
            let el = document.querySelector(`meta[${key}="${k}"]`) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(key, k);
                document.head.appendChild(el);
                created.push(el);
            }
            el.setAttribute('content', content);
        };

        upsertMeta('name', 'description', 'Schedule a 30-minute discovery call with Synq Studio to discuss your project and scale your business.');
        upsertMeta('name', 'robots', 'index,follow');
        upsertMeta('property', 'og:title', 'Book a 30-minute call — Synq Studio');
        upsertMeta('property', 'og:description', 'Schedule a 30-minute discovery call with Synq Studio to discuss your project and scale your business.');
        upsertMeta('property', 'og:type', 'website');
        upsertMeta('property', 'og:url', url);
        upsertMeta('property', 'og:image', ogImage);
        upsertMeta('name', 'twitter:card', 'summary_large_image');
        upsertMeta('name', 'twitter:title', 'Book a 30-minute call — Synq Studio');
        upsertMeta('name', 'twitter:description', 'Schedule a 30-minute discovery call with Synq Studio to discuss your project and scale your business.');
        upsertMeta('name', 'twitter:image', ogImage);

        // canonical
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
            created.push(canonical);
        }
        canonical.href = url;

        // JSON-LD structured data (ContactPage / WebPage)
        const ldJson = {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'url': url,
            'name': 'Book a 30-minute call — Synq Studio',
            'description': 'Schedule a 30-minute discovery call with Synq Studio to discuss your project and scale your business.',
            'image': ogImage,
            'mainEntity': {
                '@type': 'Organization',
                'name': 'Synq Studio',
                'url': origin || 'https://synstudio.xyz',
                'logo': {
                    '@type': 'ImageObject',
                    'url': origin + Logo,
                    'width': 512,
                    'height': 512
                }
            },
            'potentialAction': {
                '@type': 'ScheduleAction',
                'target': {
                    '@type': 'EntryPoint',
                    'urlTemplate': url
                },
                'expectsAcceptanceOf': {
                    '@type': 'Offer',
                    'name': '30-minute discovery call'
                }
            }
        };

        const ldScript = document.createElement('script');
        ldScript.type = 'application/ld+json';
        ldScript.text = JSON.stringify(ldJson);
        document.head.appendChild(ldScript);
        created.push(ldScript);

        return () => {
            document.title = prevTitle;
            created.forEach((el) => el.parentNode?.removeChild(el));
        };
    }, []);

    useEffect(() => {
        if (!calendlyRef.current) return;

        let observer: MutationObserver | null = null;
        let timeoutId: number | undefined;

        const onIframeLoad = (iframe: HTMLIFrameElement) => {
            const handler = () => {
                setLoading(false);
                iframe.removeEventListener('load', handler);
            };
            iframe.addEventListener('load', handler);
        };

        observer = new MutationObserver((mutations) => {
            for (const m of mutations) {
                for (const node of Array.from(m.addedNodes)) {
                    if (node instanceof HTMLIFrameElement) {
                        onIframeLoad(node);
                        return;
                    } else if (node instanceof HTMLElement) {
                        const iframe = node.querySelector('iframe');
                        if (iframe) {
                            onIframeLoad(iframe);
                            return;
                        }
                    }
                }
            }
        });

        observer.observe(calendlyRef.current, { childList: true, subtree: true });

        timeoutId = window.setTimeout(() => setLoading(false), 12000);

        return () => {
            if (observer) observer.disconnect();
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="relative w-full text-black bg-white min-h-screen" ref={containerRef}>
            <style>{`
                .synq-loader-wrap { position: relative; }
                .synq-loader {
            width: clamp(28px, 4vw, 42px);
            height: clamp(28px, 4vw, 42px);
            border-radius: 6px;
            background: linear-gradient(135deg, #111827, #D4AF37);
            box-shadow: 0 6px 18px rgba(0,0,0,0.15);
            animation: synq-pulse 1.4s ease-in-out infinite;
            }

            @keyframes synq-pulse {
            0%   { transform: scale(0.9); opacity: 0.6; }
            50%  { transform: scale(1);   opacity: 1; }
            100% { transform: scale(0.9); opacity: 0.6; }
            }

            .synq-loader::after {
            content: '';
            position: absolute;
            inset: -10px;
            border-radius: 10px;
            background: rgba(212, 175, 55, 0.15);
            filter: blur(10px);
            z-index: -1;
            }

                
            `}</style>

            <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 bg-white fixed">
                <div
                    className="absolute inset-0 w-full h-full opacity-60"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    role="img"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white/80" />
            </div>

            <main aria-label="Schedule a call" className="w-full px-6 py-12 md:py-24">
                <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    <div className="flex flex-col space-y-8">
                        <h1 className="font-vt323 text-6xl md:text-7xl leading-[0.8] tracking-tight uppercase mb-8">
                            Ready to Start? <br />
                            <span className="font-serif italic capitalize tracking-normal bg-gradient-to-r from-gray-700 via-gray-500 to-[#D4AF37] bg-clip-text text-transparent">
                                Let's Talk Business.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl font-serif max-w-lg text-gray-800 leading-relaxed">
                            Schedule a call with our team to discuss your project and see how we can help you scale.
                        </p>
                    </div>

                    <div className="w-full flex justify-center lg:justify-end">
                        <section
                            ref={calendlyRef}
                            className=" calendly-inline-widget
                                    synq-loader-wrap
                                    w-full
                                    max-w-[800px]
                                    h-[620px]
                                    md:h-[680px]
                                    lg:h-[720px]
                                    border border-black/5
                                    bg-white/50
                                    backdrop-blur-sm
                                    rounded-2xl
                                    shadow-2xl
                                    overflow-hidden
                                    relative"
                            data-url="https://calendly.com/synqstudio/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
                            style={{ minWidth: '320px' }}
                            aria-label="Calendly scheduling widget"
                        >
                           {loading && (
                        <div
                                aria-hidden
                                className="absolute inset-0 z-20 flex items-center justify-center bg-white/40 backdrop-blur-[2px]"
                            >
                                <div className="synq-loader" />
                            </div>
                            )}

                        </section>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Book;