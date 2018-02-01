import { MediaMode } from "./MediaMode";
import { ArchiveMode } from "./ArchiveMode";
import { ArchiveLayout } from "./ArchiveLayout";
export declare class SessionProperties {
    private mediaModeProp;
    private archiveModeProp;
    private archiveLayoutProp;
    constructor(mediaModeProp: MediaMode, archiveModeProp: ArchiveMode, archiveLayoutProp: ArchiveLayout);
    mediaMode(): string;
    archiveMode(): ArchiveMode;
    archiveLayout(): ArchiveLayout;
}
export declare namespace SessionProperties {
    class Builder {
        private mediaModeProp;
        private archiveModeProp;
        private archiveLayoutProp;
        build(): SessionProperties;
        mediaMode(mediaMode: MediaMode): Builder;
        archiveMode(archiveMode: ArchiveMode): Builder;
        archiveLayout(archiveLayout: ArchiveLayout): Builder;
    }
}
