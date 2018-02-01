"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MediaMode_1 = require("./MediaMode");
var ArchiveMode_1 = require("./ArchiveMode");
var ArchiveLayout_1 = require("./ArchiveLayout");
var SessionProperties = /** @class */ (function () {
    function SessionProperties(mediaModeProp, archiveModeProp, archiveLayoutProp) {
        this.mediaModeProp = mediaModeProp;
        this.archiveModeProp = archiveModeProp;
        this.archiveLayoutProp = archiveLayoutProp;
    }
    SessionProperties.prototype.mediaMode = function () {
        return this.mediaModeProp;
    };
    SessionProperties.prototype.archiveMode = function () {
        return this.archiveModeProp;
    };
    SessionProperties.prototype.archiveLayout = function () {
        return this.archiveLayoutProp;
    };
    return SessionProperties;
}());
exports.SessionProperties = SessionProperties;
(function (SessionProperties) {
    var Builder = /** @class */ (function () {
        function Builder() {
            this.mediaModeProp = MediaMode_1.MediaMode.ROUTED;
            this.archiveModeProp = ArchiveMode_1.ArchiveMode.MANUAL;
            this.archiveLayoutProp = ArchiveLayout_1.ArchiveLayout.BEST_FIT;
        }
        Builder.prototype.build = function () {
            return new SessionProperties(this.mediaModeProp, this.archiveModeProp, this.archiveLayoutProp);
        };
        Builder.prototype.mediaMode = function (mediaMode) {
            this.mediaModeProp = mediaMode;
            return this;
        };
        Builder.prototype.archiveMode = function (archiveMode) {
            this.archiveModeProp = archiveMode;
            return this;
        };
        Builder.prototype.archiveLayout = function (archiveLayout) {
            this.archiveLayoutProp = archiveLayout;
            return this;
        };
        return Builder;
    }());
    SessionProperties.Builder = Builder;
    ;
})(SessionProperties = exports.SessionProperties || (exports.SessionProperties = {}));
exports.SessionProperties = SessionProperties;
//# sourceMappingURL=SessionProperties.js.map