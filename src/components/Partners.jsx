import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "https://images.unsplash.com/photo-1662057168154-89300791ad6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D", alt: "Company 1", href: "https://company1.com" },
  { src: "https://images.unsplash.com/photo-1663124178603-e0b15fe90926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D", alt: "Company 2", href: "https://company2.com" },
  { src: "https://images.unsplash.com/photo-1663124178647-24f30cedd1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ29zfGVufDB8fDB8fHww", alt: "Company 3", href: "https://company3.com" },
  { src: "https://images.unsplash.com/photo-1662057168154-89300791ad6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D", alt: "Company 1", href: "https://company1.com" },
  { src: "https://images.unsplash.com/photo-1663124178603-e0b15fe90926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnklMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D", alt: "Company 2", href: "https://company2.com" },
  { src: "https://images.unsplash.com/photo-1663124178647-24f30cedd1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ29zfGVufDB8fDB8fHww", alt: "Company 3", href: "https://company3.com" },
];

export default function Partners() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}
      className="mx-10  " >
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={150}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}