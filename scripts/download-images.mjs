#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all images to download
const images = [
  // Background images
  {
    url: 'https://www.dropbox.com/scl/fi/iauykzh8d1epy9u107uro/Design-sem-nome-86.svg?rlkey=4cxyhu42nwr4z14c7staqi2li&st=ku61ie4g&raw=1',
    dest: 'backgrounds/benefits-light.svg'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/7kjbz77hhv2eom3aupicg/Design-sem-nome-80.svg?rlkey=2ku8yejzrvkum000kmjhftxfl&st=quvqpa8a&raw=1',
    dest: 'backgrounds/company-light.svg'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/7zlvbzp44b9v8ms0yhxzu/Design-sem-nome-78.svg?rlkey=3g2mlss6c2xin2pry853ypcrw&st=hv77q8q3&raw=1',
    dest: 'backgrounds/company-dark.svg'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/aiwyc2l13fzqgc2e6o8ad/5.png?rlkey=l5we3n51misoa8xxa6u2i4mfx&st=nl2mon3x&raw=1',
    dest: 'backgrounds/hero-light.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/2buladnibnrbimf7q0uxs/6.png?rlkey=1updjxyetqc2l47tj70dfadqf&st=81s16j8q&raw=1',
    dest: 'backgrounds/hero-dark.png'
  },
  
  // Company photos
  {
    url: 'https://www.dropbox.com/scl/fi/hb2m9rl73sd6k6se8o0oi/IMG_9437-2.JPG?rlkey=swmg4z5hnb34cq6crl2hpsjtc&st=rqyc6gbq&raw=1',
    dest: 'company/history.jpg'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/7znzl3jj6xpw3punhxeh0/DSC05486-2-1-1.JPG?rlkey=0oce1tv73y02gmakavzw7sodg&st=hy0940l8&raw=1',
    dest: 'company/factory.jpg'
  },
  
  // Product images
  {
    url: 'https://www.dropbox.com/scl/fi/l83hvvfk3kd34flvm1kj4/fbotimage.png?rlkey=9cvbkff24qgit6trr515176in&st=u7qsh13g&raw=1',
    dest: 'products/fbot-section.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/6hfqa4pa9i17xvj5em7iz/fbebomba.png?rlkey=a08rw80ed1em2m34rx2eiava2&st=7cxib7er&raw=1',
    dest: 'products/fbe-section.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/ua10nd19olylakzi2qsh9/Design-sem-nome-100.png?rlkey=ypljtek5gdao1ixqrm0t7xt2p&st=lk7sqr3a&raw=1',
    dest: 'products/fbot.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/np2hqjuyglb5rdlzzs2hl/Design-sem-nome-2025-06-06T184926.972.png?rlkey=axbm454vpx58c3md68o00kslv&st=7s5bm882&raw=1',
    dest: 'products/fbcn.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/sg6d1wpp1tq8l3xh849kl/Design-sem-nome-73.png?rlkey=ocyzqcox27bsyg5ajlfdnv71i&st=9j7yjsc7&raw=1',
    dest: 'products/generic-pump.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/ex30iww4awnk2r63hannu/Design-sem-nome-72.png?rlkey=anxgdrw333kigr2ntnxztsimn&st=cx6tyvpk&raw=1',
    dest: 'products/fbcn-design.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/t6moru7jiedkzru75ojcn/Design-sem-nome-71.png?rlkey=37vga7o60i112szivf7qm8v7n&st=eslq5fxc&raw=1',
    dest: 'products/fbot-design.png'
  },
  
  // Client logos
  {
    url: 'https://www.dropbox.com/scl/fi/dzjnkq4r65rira12fgppe/petrobras-logo-3-1.png?rlkey=70o3oe2il9ud1p7uodgq5cb46&st=uhmh3ppr&raw=1',
    dest: 'clients/petrobras.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/fwi1pxxt19db2lnb1nx4y/Ammann_Group_logo.svg.png?rlkey=21chd72x1qtaom4wlm5p7d5w8&st=hgjb6pk6&raw=1',
    dest: 'clients/ammann.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/f69jvsr8p2e1ohwm4ucdf/Design-sem-nome-88.svg?rlkey=vimc4a1s1gllsqcorayycff1f&st=km7kl4a8&raw=1',
    dest: 'clients/vale.svg'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/st36rjrexcnmj959uqxl1/New_Ipiranga_Logomark.svg.png?rlkey=rga7qnkn9lcu30mif7c8fa0rj&st=tmciznqn&raw=1',
    dest: 'clients/ipiranga.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/tdl0gsazb2o0xo1o5hnar/Design-sem-nome-98.svg?rlkey=jmsbkjy59ff3a9c456au6rl2u&st=nsuwybu2&raw=1',
    dest: 'clients/lintec.svg'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/vwqc59gh3jawudx4rbhoi/Design-sem-nome-69.png?rlkey=1x7kogusngr7sy2p0opg2g2ep&st=mp6zi5eb&raw=1',
    dest: 'clients/csn.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/4jm78k3hj31xjmn4ggn2e/logo-merito-comercial-1.png?rlkey=9v00hjv19l6fdh6cpmcocg5jd&st=8vhr4iog&raw=1',
    dest: 'clients/merito.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/shlm74afwnqk0gyjekeqm/cacau-show-logo-16.png?rlkey=h8jbehasn58j6ankmmhhdh1q5&st=oru3lrx1&raw=1',
    dest: 'clients/cacaushow.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/fwpaigpmjbt2kzgmviqau/Design-sem-nome-86.png?rlkey=vm0yla5vq1yyppqn5nzn3b2wx&st=x1iy0otl&raw=1',
    dest: 'clients/emam.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/3qzb1n8lkxmkkj3m8gzkc/Design-sem-nome-88.png?rlkey=4u828cqnl6vzbm7bx6i8x43ma&st=wp68l5o6&raw=1',
    dest: 'clients/stratura.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/bz1fzmly9g68d79k4rjff/LOGO_GRECA_ASFALTOS.svg?rlkey=p3u0fjovkzqrgvyhw2k3okmlt&st=0iowo01y&raw=1',
    dest: 'clients/greca.svg'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/380ttah3r3dukb2gutwwy/BASF-Logo_bw.svg.png?rlkey=598c6heusknb4ch0bafgbt10f&st=rt9xszh5&raw=1',
    dest: 'clients/basf.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/qe1bjz5eqv8oy39v2o4vq/BOMAG_201x_logo.svg.png?rlkey=ztwb3prhcftrjtw9yoerdh3yz&st=3qcu6get&raw=1',
    dest: 'clients/bomag.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/hbgjjywit0q5ze5kx55p8/Logo_Grupo_Dislub_-_Escrita_Cinza.png?rlkey=lhd9djiwhr4rvn46lzyggpcyv&st=36z9pg8l&raw=1',
    dest: 'clients/dislub.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/fctma4ighm21g2kdciep8/cargill-logo-1.png?rlkey=qv2gpgvle4opnb34hfgnbraal&st=e86tq8fy&raw=1',
    dest: 'clients/cargill.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/you3ep2v3kdf0fx6ih1cd/Aurora-Coop.webp?rlkey=y9pr6jmbxavw9v7kdxemj831t&st=afi8d7kh&raw=1',
    dest: 'clients/aurora.webp'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/1e8ziytkqz6n1frfmbgy2/logo-3.png?rlkey=wd6xcgm4ttemnxlhobrrkl4om&st=qvbs9ezq&raw=1',
    dest: 'clients/mahle.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/gj5550z0t1sd1vd7ul0qb/BRF_Global.svg.png?rlkey=aoy4to8bikwdm4nt5qyo40d6a&st=p75u4bvf&raw=1',
    dest: 'clients/brf.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/biy7aaa4n45plhniqaswl/logo-weg-2048.png?rlkey=o3y4efe3x3xv8bd2pdtbtst8y&st=d11pykmw&raw=1',
    dest: 'clients/weg.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/r0ir1ci0v6dckyqicyoyi/logo-3m-4096.png?rlkey=0e4yo59sxe7x5wp32p2lzd4lw&st=ffyfx02x&raw=1',
    dest: 'clients/3m.png'
  },
  {
    url: 'https://www.dropbox.com/scl/fi/hmmzb6rrv82tukkgoxept/Vibra-logo.png?rlkey=pv7sf40sd4enfu7j1nmcjugq1&st=kq73vyrz&raw=1',
    dest: 'clients/vibra.png'
  },
  
  // Misc
  {
    url: 'https://www.dropbox.com/scl/fi/3hjg3gcahqeiskzvgcxqp/Design-sem-nome-43.png?rlkey=thvxu22yqp6n7knif1y4tqzsj&st=x8zc7hpm&raw=1',
    dest: 'misc/fb-logo-pdf.png'
  }
];

const baseDir = path.join(__dirname, '../client/src/assets');

// Function to download a single image
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const destPath = path.join(baseDir, dest);
    const destDir = path.dirname(destPath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    const file = fs.createWriteStream(destPath);
    
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✓ Downloaded: ${dest}`);
            resolve();
          });
        }).on('error', (err) => {
          fs.unlink(destPath, () => {});
          reject(err);
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${dest}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

// Download all images
async function downloadAll() {
  console.log('Starting image download...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.dest);
    } catch (err) {
      console.error(`✗ Failed to download ${image.dest}:`, err.message);
    }
  }
  
  console.log('\nImage download complete!');
}

// Run the download
downloadAll();