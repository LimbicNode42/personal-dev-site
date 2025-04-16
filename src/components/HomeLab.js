// src/components/Blog.js
import React from 'react';

function HomeLab() {
  return (
    <div className="max-w-5xl w-[70%] mx-auto px-4 py-10 space-y-8">
      {/* Title */}
      <div>
        <h2 className="text-3xl font-bold text-center">My Home Lab</h2>
      </div>

      <div className="text-center text-gray-700">
        <p>Informal Public CMDB</p>
      </div>

      <hr className="w-full border-t border-gray-300" />

      {/* Section Title */}
      <div>
        <h3 className="text-2xl font-semibold">Hardware</h3>
      </div>

      {/* Network Section */}
      <div>
        <h4 className="text-xl font-medium mb-2">Network:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="https://www.amazon.com.au/dp/B09BMLJ9YD?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_1" target="_blank" rel="noreferrer">
              TP-Link AX5400 Dual-Band 6-Stream Gbps Wi-Fi 6 Router
            </a>
          </li>
          <li>
            <a href="https://www.tp-link.com/au/business-networking/omada-sdn-switch/tl-sg2008p/" target="_blank" rel="noreferrer">
              TP-Link TL-SG2008P JetStream 8-Port Gigabit Smart Switch with 4-Port PoE+
            </a>
          </li>
        </ul>
      </div>

      {/* Compute Section */}
      <div>
        <h4 className="text-xl font-medium mb-2">Compute:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="https://www.amazon.com.au/ASUS-GR8-II-T069Z-Desktop-i5-7400/dp/B06X16343X" target="_blank" rel="noreferrer">
              ASUS GR8 II-T069Z Mini PC
            </a>
          </li>
          <li>
            <a href="https://www.jaycar.com.au/raspberry-pi-4b-single-board-computer-8gb/p/XC9104" target="_blank" rel="noreferrer">
              Raspberry Pi 4B Single Board Computer 8GB
            </a>{" "}
            <i>x3</i>
          </li>
          <li>
            <a href="https://www.amazon.com.au/dp/B0CK2FCG1K" target="_blank" rel="noreferrer">
              Raspberry Pi 5 Model B 8GB LPDDR4 2.4GHz Quad-Core ARM Cortex-A76
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com.au/dp/B07JPXR9ZN" target="_blank" rel="noreferrer">
              DSLRKIT Power Over Ethernet PoE HAT
            </a>{" "}
            <i>x3</i>
          </li>
          <li>
            <a href="https://www.amazon.com.au/dp/B0CR41XZ15" target="_blank" rel="noreferrer">
              waveshare Power Over Ethernet HAT
            </a>
          </li>
        </ul>
      </div>

      {/* Storage Section */}
      <div>
        <h4 className="text-xl font-medium mb-2">Storage:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="https://www.amazon.com.au/dp/B09R4HNX4J" target="_blank" rel="noreferrer">
              Samsung Evo Plus 128GB SDXC U3 Class 10 A2 130MB/s
            </a>{" "}
            <i>x4</i>
          </li>
          <li>
            <a href="https://www.amazon.com.au/Seagate-IronWolf-ST8000VN004-Internal-Serial/dp/B07SZVVBBK" target="_blank" rel="noreferrer">
              Seagate 8TB 3.5" 7200rpm SATA IronWolf NAS HDD PN ST8000VN004
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com.au/ORICO-Enclosure-Aluminum-Tool-Free-Installation/dp/B086Y757DZ" target="_blank" rel="noreferrer">
              ORICO 8 Bay Enclosure Aluminum Type-C 3.5inch to SATA III Hard Drive Enclosure
            </a>
          </li>
        </ul>
      </div>

      {/* Workstationo Section */}
      <div>
        <h4 className="text-xl font-medium mb-2">Workstation:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="https://www.amazon.com.au/Philips-Line-253V7LJAB-Computer-Monitor/dp/B07W1XSJLW" target="_blank" rel="noreferrer">
              Philips V Line 253V7LJAB/00 Computer Monitor 62.2 cm (24.5") Full HD LCD Flat
            </a>{" "}
            <i>x3</i>
          </li>
          <li>
            <a href="https://www.laptopsdirect.co.uk/hp_w2448hc_24_inch_lcd_monitor_ku912aa/version.asp" target="_blank" rel="noreferrer">
              HP w2448hc 24 inch LCD Monitor
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com.au/Logitech-Low-Profile-Double-Shot-Programmable-Backlighting/dp/B0DDY15G7X" target="_blank" rel="noreferrer">
              Logitech G915 X Lightspeed TKL Low-Profile
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com.au/dp/B0B11LJ69K" target="_blank" rel="noreferrer">
              Logitech MX Master 3S
            </a>
          </li>
          <li>
            <a href="https://www.audeze.com/products/maxwell-wireless-gaming-headset" target="_blank" rel="noreferrer">
              Audeze Maxwell Wireless Gaming Headset
            </a>
          </li>
        </ul>
      </div>

      {/* Peripherals Section */}
      <div>
        <h4 className="text-xl font-medium mb-2">Peripherals:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="https://www.amazon.com.au/Philips-Line-253V7LJAB-Computer-Monitor/dp/B07W1XSJLW" target="_blank" rel="noreferrer">
              Philips V Line 253V7LJAB/00 Computer Monitor 62.2 cm (24.5") Full HD LCD Flat
            </a>{" "}
            <i>x3</i>
          </li>
          <li>
            <a href="https://www.laptopsdirect.co.uk/hp_w2448hc_24_inch_lcd_monitor_ku912aa/version.asp" target="_blank" rel="noreferrer">
              HP w2448hc 24 inch LCD Monitor
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com.au/Logitech-Low-Profile-Double-Shot-Programmable-Backlighting/dp/B0DDY15G7X" target="_blank" rel="noreferrer">
              Logitech G915 X Lightspeed TKL Low-Profile
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com.au/dp/B0B11LJ69K" target="_blank" rel="noreferrer">
              Logitech MX Master 3S
            </a>
          </li>
          <li>
            <a href="https://www.audeze.com/products/maxwell-wireless-gaming-headset" target="_blank" rel="noreferrer">
              Audeze Maxwell Wireless Gaming Headset
            </a>
          </li>
        </ul>
      </div>

      <br></br>

      

      {/* Section Title */}
      <div>
        <h3 className="text-2xl font-semibold">Software</h3>
      </div>

      {/* OS Section */}
      <div>
        <h4 className="text-xl font-medium mb-2">Operating System:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Bare Metal - {" "}
            <a href="https://www.debian.org/" target="_blank" rel="noreferrer">Debian 12 (bookworm)</a> {" "}
            <i>vanilla + PiOS w/ Pimox</i>
            <ul className="list-disc list-inside pl-6 mt-1 text-sm text-gray-700">
              <li>
                Check out: <a href="https://pimylifeup.com/raspberry-pi-proxmox/" target="_blank" rel="noreferrer">https://pimylifeup.com/raspberry-pi-proxmox/</a>
              </li>
            </ul>
          </li>
          <li>
            Containers - {" "}
            <a href="https://alpinelinux.org/" target="_blank" rel="noreferrer">Alpine 3.18</a>
          </li>
          <li>
            NAS - {" "}
            <a href="https://www.openmediavault.org/" target="_blank" rel="noreferrer">OpenMediaVault 7.6.0-1 (Sandworm)</a>
          </li>
        </ul>
      </div>

      {/* Cloud Section */}
      <div>
        <h4 className="text-xl font-medium mb-2">Cloud:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Network Management - {" "}
            <a href="https://www.omadanetworks.com/au/business-networking/omada-controller-cloud-software/omada-software-controller/" target="_blank" rel="noreferrer">Omada SDN Controller</a>
          </li>
          <li>
            CDN, DNS, DDoS protection, etc. - {" "}
            <a href="https://www.cloudflare.com/en-au/" target="_blank" rel="noreferrer">CloudFlare</a>
          </li>
          <li>
            Zero Trust Proxy (instead of VPN) - {" "}
            <a href="https://www.cloudflare.com/en-au/zero-trust/products/access/" target="_blank" rel="noreferrer">CloudFlare Zero Trust</a>
            <ul className="list-disc list-inside pl-6 mt-1 text-sm text-gray-700">
              <li>
                Check out: <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/" target="_blank" rel="noreferrer">https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeLab;