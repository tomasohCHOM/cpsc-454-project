import Filepicker from "./components/filepicker";

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-2xl md:text-5xl text-center">
        Cloud Video Transcription App
      </h1>

      <Filepicker />
    </main>
  );
}
