import backup from "@/assets/backup.jpg.asset.json";
import inverters from "@/assets/inverters.jpg.asset.json";
import solarRoof from "@/assets/solar-roof.jpg.asset.json";
import solarView from "@/assets/solar-view.jpg.asset.json";

// Lovable's asset endpoint is not served by third-party hosts such as Netlify.
// Keep the original pointers, but request photos from their serving origin.
const ASSET_ORIGIN = "https://sn-spark-solar-plumbing.lovable.app";

export const PHOTOS = {
  backup: new URL(backup.url, ASSET_ORIGIN).href,
  inverters: new URL(inverters.url, ASSET_ORIGIN).href,
  solarRoof: new URL(solarRoof.url, ASSET_ORIGIN).href,
  solarView: new URL(solarView.url, ASSET_ORIGIN).href,
};