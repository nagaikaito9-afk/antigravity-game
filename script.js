const TILE_SIZE = 40;

const MAP1 = [
    "                                                                                                                                                              ",
    "                                                                                                                    V                                         ",
    "                                                                                                                              V                               ",
    "                                                   Q            V            V                                                     F            Q             ",
    "                                    C  Q            L                C     C                          C Q C  Q C C                                BBB         ",
    "                   C             BBBBBBBB                           BBB   BBB                        BBBBBBBBBBBBBB           S     G            BBBBB        ",
    "                  BBB                            E  F              BBBB   BBBB            E               L                        BBBB         BBBBBBB       ",
    "     E         S                              BBBBBBB          BBBB             BBBB   BBBBBBBB                             C                  BBBBBBBBB      ",
    " P  BBBBBB   BBBBBBB      BBBBBBBB       F               J          O                   N                   F             F        BBBBBB              BBBBBBBBBBB     ",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB  BBBBBBB  BBBBBBBB  BBBBBBBBBBBBBBBB  BBBBBBBBBBB  BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
];

const MAP2 = [
    "                                                                                                                                                                                                                                                                                        ",
    "                                                                                                                                                                                                                                                                                        ",
    "                                           T                                        D                                                                                                            Q                 T                                                                    ",
    "                                                                                                        C   C                                    T                                                                                                                              G       ",
    "                              C                V            Q                 C             C          BBBBB                                              F            L                        BBB                       C        T                            K               BBBBB   ",
    "            C  C           BBB                             BBB               BBBBBB        BBBB                                   Q C                     BBBBBB                                              J       BBBBBB    BBBB                              C    Q            ",
    "           BBBBBB                      T           V                                                  BBBBBBB                                  T                                                 T                                                          D D   BBB   BBBBBB          ",
    "      E                               BBB                                                            BBBBBBBBBBBBBBBBBBBBBBBB   O       BBB                           E   E                               D D D         E                 V     J                               ",
    " P  BBBBB               E                                         K  K  K                       N                         E                                        V       BBBBBBB      D  D      BBBBBBB                                   B B B   E  BBBB                         ",
    "BBBBBBBBBBBBBBBBBB   BBBBBBBBBBBBB   BBBBBBBBBBBBBBBBBBBBB   BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB   BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB   BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB   BBBBBBBBBBBBBBBBBBBBBBBB   BBBBBBBBBBBBBBBBBBBBBBBBBBBBB   BBBBBBBBBBBBB"
];

const MAP3 = [
    "                                                                                                                                                                                                                                                                        ",
    "                                                                                                                                                                                       C                                                           C C                  ",
    "                                                                                        C C                     Q                                                 C                   BBBBB                                                       BBBBB                 ",
    "                                                 T                                     BBBBB                                T             V              T      BBBBB                                       T                       V                                   ",
    "                               C                BBB                 K                                   Q K K K K K K      BBB                          BBB                                                BBB                 K K K K K K K                  G             ",
    "        Q      J              BBB                              C    B     F               D  D  D      BBBBBBBBBBBBBBB                  D  D  D  D                           Q                E                                B B B B B B B                BBBBBB            ",
    "      BBBBB               T              K  K           C    BBBBB                T                                                  F                          V           BBBBB                T             L                        V                             ",
    " P             D D D     BBB            BBBBBBBB      BBBBB          K K K K     BBB               V       E            L           BBBBBBBBBBBBBBBBBBBB             E                  D D D   BBB           BBBBBBB                        E   E            ",
    "BBB           O         BBBBBBBB                      BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB      BBBBBBBBBBBBBBBB     BBBBBBBBB    NBBBBBBBBBBBBBBBBBBBBBBBBB      BBBBBBBBC          BBBBBBB               BBBBBBBBBBBBB    BBBBBBBBBBBBBB   BBBBBBB            ",
    "BBBBBBBBBBBBBB   BBBBBBBBBBBBBBBBBB   BBBBBBBBBBBBB   BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB  BBBBBBBBBBBBBBBBBBB  BBBBBBBBBBBBB BBBBBBBBBBBBBBBBBBBBBBBBBBBBB  BBBBBBBBBBBBBBBB   BBBBBBBBBBBBBBBBBBB   BBBBBBBBBBBBBBBB BBBBBBBBBBBBBBBB BBBBBBBBBBBBBBBB BBBBBBBBBBBBB   BBBBBBBBB"
];

const MAP4 = [
    "                                                                                                                                                                                                                                                                                        ",
    "                                                                                                    C C C C                                                                                                                                                                             ",
    "                                          U                 Z                                         D D D                                          Y                           T                Z                                       Y                 I I I I I   I I I I I       ",
    "                                C C                 BBBBB                 W                                                    H   H         < < < < < < <                                                     B Q B                                                              G     ",
    "                               I I I               B   Q B                                     Y                                         < <               < <                   T                            B  W    B                            BBBBBBBB                         B   B ",
    "    H             Z           I                       T          > > > >           I I   < < < <   < <       > > > >       BBBBBB    < <                         < <   > > >       B                         B C C C B    Z                   H             H                       B   ",
    "BBBBBD D D I I I BBBBB     I             T                  > >            I I                                         I              I                                             BBB   K I I I K   BBBB      B B B       > > > < < <    I I I   K B B K          U                 BB  ",
    "                   BBBBB  I                 BBBB                          I     C                                   I         H           K I K                         > > >      BBBBB B B B B B B                                      I         K K                             B   ",
    " P                     I I                            Z            Z   I       > > >                 Z           I                      N< <                                             BBBB   E   E                                        I                        B B B B          B     ",
    "BBBD D DD D I I I I     BBBBBBBBBBBB  I I I I I   BBBBBBBBB > > > >   I       O       < < < < I I I I I I I I I   < < < < < < < < <   BBBBBBBB    > > > > > > > > > >   I I I I I I I I BBBB    BBBBBB  BBBBBB   > > > > > > > >  I I I I I I      I I I I I I I I I I I I I I I   BBBB     "
];

const MAP5 = [
    "                                                                                                                    C C C                                                                                                                            C C C C C C C C C C C C C C C    G ",
    "                                      W       W                   U                 W                               C   C               U          T                        U                              W         W      U              C C C C C                                  B ",
    "                                                       C C                                                  > >     C C C     < <                 D D       > > > >                   C C C                            C C C              C                                         B ",
    "                        T D             Z             BBBBB                              I I               BBBBB             BBBBB       D D                 K K K T Y             BBBBB M M BBBBB                   BBBBBBB              C                                         B ",
    "                                            BBBBB            C C C          T                             B     B           B     B                           B B           I                 C      H        H                       T C                H                          B ",
    "         Z Z       < < < < <               B     B      T D D D D D T              C C     C         H   B       B    T    B       B   H   H       K K   D B       B D         I I                 BBB     BBB       > > > > >                            K K K K K K K K K       B ",
    "  H  H BBBBB  H    K       K       Y      B  W W  B     BB           BB   Y      BBBBB T BBBBB      BBBBBB K K K B BBBBBBB B K K K BBBBBBBBBBBB   B B B    B       B   H  T I I      Z                   C      H    K         K   H    Z      BBBBBBBBBBBBBBBBBBBBBBBBBBB       B ",
    " P         K                               B     B    Z        Z        B     Z  K             < <         B B B   B B B B   B C B             N       D       K      BBBBBB                  O                         K   U     K    I I I                            B           B ",
    "BBBB     C  T   I I I I I I I I   > > > >   B   B      < < < < < < <     B   > >          Y          > > >          K   K         > > > > > > T            D D D            < < < < < < < < <      C C C C C C     I I I  I I I  I I      Z      Z                B           B ",
    "BBBBBD D D D DD B B B B B B B B B K K K K K  B B B K K K K K K K K K K K B B K K K    I I I I I I I  K K K K K K K   K   K K K K K   BBBBBBBB    B  B  B D D D K K K K K K K K K B B B B B B B B B    BBBBBBBBBBBBBBB      BBBBBBBB       BBBBBBBBBBBBBBBBBBBBB B B B B B B B B B B B B B "
];

const LEVELS = [MAP1, MAP2, MAP3, MAP4, MAP5];
// --------- Audio Setup ---------
class AudioManager {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.bgmPlaying = false; this.bgmTimer = null;
        this.bgmNextTime = 0; this.bgmBeat = 0;
        this.currentTrack = 'game';
        this.melodies = {
            game: [
                523.25, 659.25, 783.99, 1046.50, 587.33, 698.46, 880.00, 1174.66,
                493.88, 659.25, 783.99, 987.77,  440.00, 523.25, 659.25, 880.00
            ],
            title: [
                261.63, 329.63, 392.00, 523.25, 349.23, 440.00, 523.25, 698.46,
                392.00, 493.88, 587.33, 783.99, 523.25, 392.00, 329.63, 261.63
            ],
            select: [
                392.00, 392.00, 440.00, 440.00, 349.23, 349.23, 392.00, 392.00,
                329.63, 329.63, 349.23, 349.23, 293.66, 293.66, 261.63, 261.63
            ]
        };
    }
    
    playTone(freqStart, freqEnd, type, duration, vol=0.1, startTime=0) {
        if(this.ctx.state === 'suspended') this.ctx.resume();
        let osc = this.ctx.createOscillator(); let gain = this.ctx.createGain();
        osc.type = type; osc.connect(gain); gain.connect(this.ctx.destination);
        let t = startTime === 0 ? this.ctx.currentTime : startTime;
        osc.frequency.setValueAtTime(freqStart, t);
        if (freqEnd !== freqStart) osc.frequency.exponentialRampToValueAtTime(freqEnd, t + duration);
        gain.gain.setValueAtTime(vol, t); gain.gain.exponentialRampToValueAtTime(0.01, t + duration);
        osc.start(t); osc.stop(t + duration);
    }

    playCoin() { this.playTone(800, 1200, 'sine', 0.1, 0.1); }
    playJump() { this.playTone(150, 300, 'triangle', 0.15, 0.05); }
    playStomp() { this.playTone(150, 50, 'square', 0.1, 0.1); }
    playShoot() { this.playTone(800, 400, 'square', 0.05, 0.05); }
    playDeath() { this.playTone(300, 50, 'sawtooth', 0.5, 0.15); }
    playSelect() { this.playTone(400, 600, 'sine', 0.1, 0.1); }
    playStart() { this.playTone(500, 800, 'sine', 0.2, 0.1); }
    playClear() {
        let t = this.ctx.currentTime;
        this.playTone(523, 523, 'square', 0.1, 0.1, t);
        this.playTone(659, 659, 'square', 0.1, 0.1, t + 0.1);
        this.playTone(783, 783, 'square', 0.1, 0.1, t + 0.2);
        this.playTone(1046, 1046, 'square', 0.3, 0.1, t + 0.3);
    }

    bgmScheduler() {
        while (this.bgmNextTime < this.ctx.currentTime + 0.1) {
            const melody = this.melodies[this.currentTrack];
            let freq = melody[this.bgmBeat % melody.length];
            // Pulse wave 1 (Lead)
            this.playTone(freq, freq, 'square', 0.08, 0.015, this.bgmNextTime);
            // Triangle wave (Bass) - exactly 1 octave lower
            this.playTone(freq / 2, freq / 2, 'triangle', 0.12, 0.03, this.bgmNextTime);
            // Noise-like percussion (Short square bursts)
            if (this.bgmBeat % 4 === 0) this.playTone(100, 10, 'square', 0.03, 0.02, this.bgmNextTime);
            
            this.bgmNextTime += 0.15; this.bgmBeat++;
        }
        if (this.bgmPlaying) this.bgmTimer = setTimeout(() => this.bgmScheduler(), 50);
    }
    startBGM(track = 'game') {
        if(this.ctx.state === 'suspended') this.ctx.resume();
        if(this.bgmPlaying && this.currentTrack === track) return;
        if(this.bgmPlaying) this.stopBGM();
        this.currentTrack = track;
        this.bgmPlaying = true; this.bgmBeat = 0;
        this.bgmNextTime = this.ctx.currentTime + 0.1;
        this.bgmScheduler();
    }
    stopBGM() {
        this.bgmPlaying = false; clearTimeout(this.bgmTimer);
    }
}
const audio = new AudioManager();

// --------- Storage & Config ---------
class SaveData {
    constructor() { this.load(); }
    load() {
        let saved = localStorage.getItem('cat_odyssey_save');
        if (saved) {
            let data = JSON.parse(saved);
            this.maxStage = data.maxStage || 1;
            this.coins = data.coins || 0;
            this.life = data.life !== undefined ? data.life : 3;
            this.score = data.score || 0;
            this.hpUpgradeBought = data.hpUpgradeBought || false; 
            this.enemyHPCheat = data.enemyHPCheat || false;
            this.megaCheatActive = data.megaCheatActive || false;
            this.checkpoint = data.checkpoint || { x: null, y: null, stage: null };
            this.keyConfig = data.keyConfig || {
                left: ['ArrowLeft', 'KeyA'], right: ['ArrowRight', 'KeyD'], 
                jump: ['ArrowUp', 'KeyW'], shoot: ['Space', 'KeyK']
            };
        } else { this.reset(); }
    }
    save() {
        localStorage.setItem('cat_odyssey_save', JSON.stringify({
            maxStage: this.maxStage, coins: this.coins, life: this.life, score: this.score,
            hpUpgradeBought: this.hpUpgradeBought, keyConfig: this.keyConfig,
            enemyHPCheat: this.enemyHPCheat,
            megaCheatActive: this.megaCheatActive,
            checkpoint: this.checkpoint
        }));
    }
    reset() {
        this.maxStage = 1; this.coins = 0; this.score = 0; this.hpUpgradeBought = false;
        this.keyConfig = { 
            left: ['ArrowLeft', 'KeyA'], right: ['ArrowRight', 'KeyD'], 
            jump: ['ArrowUp', 'KeyW'], shoot: ['Space', 'KeyK'] 
        };
        this.life = 3; this.enemyHPCheat = false; this.megaCheatActive = false; this.checkpoint = { x: null, y: null, stage: null }; this.save();
    }
    hardReset() {
        this.maxStage = 1; this.coins = 0; this.score = 0; this.hpUpgradeBought = false;
        this.keyConfig = { 
            left: ['ArrowLeft', 'KeyA'], right: ['ArrowRight', 'KeyD'], 
            jump: ['ArrowUp', 'KeyW'], shoot: ['Space', 'KeyK'] 
        };
        this.life = 3; this.enemyHPCheat = false; this.megaCheatActive = false; this.checkpoint = { x: null, y: null, stage: null }; this.save();
    }
    addCoin() {
        this.coins++;
        this.save();
    }
    addScore(points) {
        this.score += points;
        this.save();
    }
}
const db = new SaveData();

// --------- Input ---------
class Input {
    constructor() {
        this.keys = {};
        this.cheatCode = "kaitohatosaburenagai20251110";
        this.cheatBuffer = "";
        window.addEventListener('keydown', e => {
            // Prevent default for keys assigned in keyConfig or common game keys
            const assignedKeys = Object.values(db.keyConfig).flat();
            if([...assignedKeys, 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
                e.preventDefault();
            }
            this.keys[e.code] = true;
            
            // Cheat code detection
            if (e.key.length === 1) {
                this.cheatBuffer += e.key.toLowerCase();
                if (this.cheatBuffer.length > 50) this.cheatBuffer = this.cheatBuffer.slice(-50);
                if (this.cheatBuffer.includes(this.cheatCode)) {
                    this.cheatBuffer = "";
                    window.dispatchEvent(new CustomEvent('cheat-activated'));
                }
            }
        });
        window.addEventListener('keyup', e => { this.keys[e.code] = false; });
    }
    isDown(code) { return this.keys[code] === true; }
    isActionDown(action, config) {
        const assigned = config[action];
        if (Array.isArray(assigned)) {
            return assigned.some(k => this.keys[k] === true);
        }
        return this.keys[assigned] === true;
    }
}

// --------- Entities ---------
class Entity {
    constructor(x, y, w, h) {
        this.x = x; this.y = y; this.w = w; this.h = h;
        this.vx = 0; this.vy = 0;
        this.dead = false; this.time = 0; 
    }
    update(dt) { this.time += dt; }
    draw(ctx, cameraX) {}
    getAABB() { return { x: this.x, y: this.y, w: this.w, h: this.h }; }
    checkCollision(other) {
        let a = this.getAABB(), b = other.getAABB();
        return (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y);
    }
}

class FloatingText extends Entity {
    constructor(x, y, text, color='#FFF') {
        super(x, y, 0, 0);
        this.text = text;
        this.color = color;
        this.vy = -30;
        this.lifeTime = 2.0;
    }
    update(dt) {
        super.update(dt);
        this.y += this.vy * dt;
        this.lifeTime -= dt;
        if(this.lifeTime <= 0) this.dead = true;
    }
    draw(ctx, cameraX) {
        if(this.dead) return;
        let dx = Math.floor(this.x - cameraX);
        let dy = Math.floor(this.y);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, this.lifeTime/2);
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(this.text, dx, dy);
        ctx.globalAlpha = 1.0;
    }
}

class Block extends Entity {
    constructor(x, y) { super(x, y, TILE_SIZE, TILE_SIZE); }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        // Base dirt
        ctx.fillStyle = '#8B4513'; ctx.fillRect(dx, dy, this.w, this.h);
        // Dark pixels
        ctx.fillStyle = '#5C2E0B'; ctx.fillRect(dx + 4, dy + 12, 4, 4); ctx.fillRect(dx + 20, dy + 24, 4, 4);
        // Grass top
        ctx.fillStyle = '#32CD32'; ctx.fillRect(dx, dy, this.w, 8);
        ctx.fillStyle = '#228B22'; ctx.fillRect(dx, dy + 8, this.w, 4);
    }
}

class QBlock extends Entity {
    constructor(x, y) {
        super(x, y, TILE_SIZE, TILE_SIZE);
        this.hit = false;
        this.bumpTimer = 0;
        this.baseY = y;
    }
    trigger(game) {
        if (this.hit) return;
        this.hit = true;
        this.bumpTimer = 0.2; 
        audio.playStomp();
        
        const count = db.megaCheatActive ? 10 : 1;
        for (let i = 0; i < count; i++) {
            let ox = (i % 5) * 12 - 24;
            let oy = Math.floor(i / 5) * -20;
            let rand = Math.random();
            if (rand < 0.02) {
                game.items.push(new Item(this.x + 10 + ox, this.y - 30 + oy, 'H'));
            } else if (rand < 0.32) {
                game.items.push(new Item(this.x + 10 + ox, this.y - 30 + oy, 'C'));
            } else if (rand < 0.52) {
                game.items.push(new Item(this.x + 10 + ox, this.y - 30 + oy, 'M'));
            } else if (rand < 0.72) {
                game.items.push(new Item(this.x + 10 + ox, this.y - 30 + oy, 'A'));
            } else if (rand < 0.86) {
                game.items.push(new Item(this.x + 10 + ox, this.y - 30 + oy, 'X'));
            } else {
                game.enemies.push(new Enemy(this.x + 5 + ox, this.y - 30 + oy, 'E'));
            }
        }
    }
    update(dt) {
        super.update(dt);
        if (this.bumpTimer > 0) {
            this.bumpTimer -= dt;
            if (this.bumpTimer > 0.1) this.y = this.baseY - (0.2 - this.bumpTimer) * 50;
            else this.y = this.baseY - this.bumpTimer * 50;
        } else {
            this.y = this.baseY;
        }
    }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        
        if (this.hit) {
            ctx.fillStyle = '#444'; ctx.fillRect(dx, dy, this.w, this.h);
            ctx.fillStyle = '#222'; ctx.fillRect(dx + 4, dy + 4, 4, 4);
        } else {
            ctx.fillStyle = '#f1c40f'; ctx.fillRect(dx, dy, this.w, this.h);
            ctx.fillStyle = '#000'; ctx.font = '16px "Press Start 2P"';
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText('?', dx + this.w/2, dy + this.h/2);
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.strokeRect(dx + 2, dy + 2, this.w - 4, this.h - 4);
        }
    }
}

class TrampolineBlock extends Entity {
    constructor(x, y) { super(x, y, TILE_SIZE, TILE_SIZE); this.compress = 0; }
    update(dt) {
        super.update(dt);
        if (this.compress > 0) {
            this.compress -= dt * 5;
            if (this.compress < 0) this.compress = 0;
        }
    }
    trigger() {
        this.compress = 1.0;
        audio.playJump();
    }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        let cH = this.h - this.compress * 15;
        let cY = dy + this.h - cH;
        ctx.fillStyle = '#44f'; ctx.fillRect(dx, cY, this.w, cH);
        ctx.fillStyle = '#aaf'; ctx.fillRect(dx, cY, this.w, 4);
        ctx.fillRect(dx, cY + cH - 4, this.w, 4);
    }
}

class CrumbleBlock extends Entity {
    constructor(x, y) { super(x, y, TILE_SIZE, TILE_SIZE); this.timer = -1; }
    update(dt) {
        super.update(dt);
        if (this.timer > 0) {
            this.timer -= dt;
            if (this.timer <= 0) {
                this.dead = true; 
                audio.playStomp(); // crumble sound
            }
        }
    }
    trigger() {
        if (this.timer === -1) this.timer = 1.0; // 1 second to crumble
    }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        if (this.timer > 0 && Math.floor(this.timer * 20) % 2 === 0) return;
        ctx.fillStyle = '#CD853F'; ctx.fillRect(dx, dy, this.w, this.h);
        ctx.fillStyle = '#000'; ctx.fillRect(dx + 4, dy + 10, 8, 4); ctx.fillRect(dx + 20, dy + 25, 6, 4);
    }
}

class SpikeBlock extends Entity {
    constructor(x, y) { super(x, y, TILE_SIZE, TILE_SIZE); }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        ctx.fillStyle = '#555'; ctx.fillRect(dx, dy + 20, this.w, this.h - 20);
        ctx.fillStyle = '#ccc';
        for(let i=0; i<3; i++) {
            ctx.fillRect(dx + 4 + i*12, dy + 4, 8, 16);
        }
    }
}

class IceBlock extends Entity {
    constructor(x, y) { super(x, y, TILE_SIZE, TILE_SIZE); }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        ctx.fillStyle = '#0ff'; ctx.fillRect(dx, dy, this.w, this.h);
        ctx.fillStyle = '#fff'; ctx.fillRect(dx + 4, dy + 4, 12, 4);
    }
}

class BoostBlock extends Entity {
    constructor(x, y) { super(x, y, TILE_SIZE, TILE_SIZE); this.activated = false; }
    trigger(player) {
        player.boostTimer = 2.0;
        this.activated = true; audio.playStart();
    }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        ctx.fillStyle = '#ff0'; ctx.fillRect(dx, dy, this.w, this.h);
        ctx.fillStyle = '#f00'; ctx.fillRect(dx + 15, dy + 5, 10, 30); ctx.fillRect(dx + 5, dy + 15, 30, 10);
    }
}

class ConveyorBlock extends Entity {
    constructor(x, y, isRight) { 
        super(x, y, TILE_SIZE, TILE_SIZE); 
        this.isRight = isRight; 
    }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        ctx.fillStyle = '#444'; ctx.fillRect(dx, dy, this.w, this.h);
        let offset = Math.floor(this.time * 60) % 20;
        if (!this.isRight) offset = 20 - offset;
        ctx.fillStyle = '#888';
        for(let i=0; i<4; i++) {
            ctx.fillRect(dx + ((i * 20 + offset) % 60) - 20, dy, 10, this.h);
        }
    }
}

class Item extends Entity {
    constructor(x, y, type) {
        let size = type === 'BC' ? 40 : 20;
        super(x, y, size, size);
        this.type = type; 
        this.vx = 80;
        if (Math.random() > 0.5) this.vx = -80;
        this.vy = -200; // Popup effect
        if (type === 'A') { this.vx = 0; }
        if (type === 'H' || type === 'C' || type === 'BC') { this.vx = 0; } // 落下はするが、直上へ
    }
    update(dt) {
        super.update(dt);
        if (this.type !== 'A') {
            this.vy += 1600 * dt; 
        } else {
            this.vy += 800 * dt; 
        }
    }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        if (this.type === 'M' || this.type === 'X') {
            ctx.fillStyle = this.type === 'M' ? '#f00' : '#f0f';
            ctx.fillRect(dx, dy, 20, 10);
            ctx.fillStyle = '#fff'; ctx.fillRect(dx + 4, dy + 10, 12, 10);
        } else if (this.type === 'A') {
            ctx.fillStyle = '#fff'; ctx.fillRect(dx, dy, 20, 20);
            ctx.fillStyle = '#000'; ctx.fillRect(dx + 4, dy + 4, 12, 12);
        } else if (this.type === 'C' || this.type === 'BC') {
            let s = this.type === 'BC' ? 2 : 1;
            ctx.fillStyle = '#ff0'; ctx.fillRect(dx, dy, 20 * s, 20 * s);
            ctx.fillStyle = '#da0'; ctx.fillRect(dx + 4 * s, dy + 4 * s, 12 * s, 12 * s);
        } else if (this.type === 'H') {
            // Simple Pixel Heart
            ctx.fillStyle = '#ff3366';
            ctx.fillRect(dx + 4, dy + 4, 4, 4); ctx.fillRect(dx + 12, dy + 4, 4, 4);
            ctx.fillRect(dx + 2, dy + 8, 16, 4);
            ctx.fillRect(dx + 4, dy + 12, 12, 4);
            ctx.fillRect(dx + 8, dy + 16, 4, 4);
        }
    }
}

class Projectile extends Entity {
    constructor(x, y, dirX, isEnemyBullet = false, vy = 0) {
        super(x, y, 20, 20);
        this.vx = dirX * 400;
        this.vy = vy;
        this.isEnemyBullet = isEnemyBullet;
    }
    update(dt) { super.update(dt); this.x += this.vx * dt; this.y += this.vy * dt; }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        ctx.fillStyle = this.isEnemyBullet ? '#f00' : '#fff';
        ctx.fillRect(Math.floor(this.x - cameraX), Math.floor(this.y), 10, 10);
    }
}

class Player extends Entity {
    constructor(x, y) {
        super(x, y, 30, 30);
        this.speed = 280;
        this.jumpPower = -720;
        this.gravity = 1600;
        this.onGround = false;
        this.isMoving = false;
        this.jumpInputProcessed = false;
        this.jumpCount = 0; 
        this.shootTimer = 0;
        this.faceRight = true;
        this.isBig = false;
        this.isMega = false;      // チートで2段階巨大化
        this.cheatHealth = 0;     // チートで耐えられる追加ダメージ回数
        this.ammo = 30;
        this.invincibleTimer = 0;
        this.poisonTimer = 0;
        this.boostTimer = 0;
    }

    poison() {
        if (this.poisonTimer <= 0) {
            this.poisonTimer = 5.0; // Changed from 2.5 to 5.0
            audio.playStomp(); 
        }
    }

    makeBig() {
        if (this.isMega) return; // already mega
        if (this.isBig) {
            // キノコ状態 → メガ状態（さらに2倍 = 通常の3倍）
            this.isMega = true;
            this.y -= 45; // 90-45=45の差分
            this.w = 90; this.h = 90;
            audio.playStart();
            return;
        }
        // 通常 → キノコ状態
        this.isBig = true;
        this.y -= 15;
        this.w = 45; this.h = 45;
        audio.playStart(); 
    }

    makeMegaCheat() {
        // チート発動時に即座にメガ状態にする
        if (!this.isMega) {
            this.isMega = true;
            this.isBig = true;
            this.y -= 60;
            this.w = 90; this.h = 90;
        }
        this.cheatHealth = 5;
    }

    damage(dirX, triggerGameOverFunc) {
        if (this.invincibleTimer > 0) return; 
        if (this.isMega) {
            // メガ → キノコ状態
            this.isMega = false;
            this.y += 45;
            this.w = 45; this.h = 45;
            this.vx = dirX < 0 ? -300 : 300;
            this.vy = -400;
            this.invincibleTimer = 2.0;
            audio.playStomp();
        } else if (this.isBig) {
            this.isBig = false;
            this.y += 15;
            this.w = 30; this.h = 30;
            this.vx = dirX < 0 ? -300 : 300;
            this.vy = -400; 
            this.invincibleTimer = 2.0; 
            audio.playStomp(); 
        } else if (this.cheatHealth > 0) {
            // チートの追加耐久
            this.cheatHealth--;
            this.vx = dirX < 0 ? -300 : 300;
            this.vy = -400;
            this.invincibleTimer = 2.0;
            audio.playStomp();
        } else {
            triggerGameOverFunc();
        }
    }

    update(dt, input, game) {
        super.update(dt);
        if (this.invincibleTimer > 0) this.invincibleTimer -= dt;
        if (this.poisonTimer > 0) {
            this.poisonTimer -= dt;
            if (this.poisonTimer <= 0) {
                game.triggerGameOver();
            }
        }
        if (this.boostTimer > 0) this.boostTimer -= dt;

        this.isMoving = false;
        let currentSpeed = this.speed;
        if (db.megaCheatActive) currentSpeed *= 1.5;
        if (this.boostTimer > 0) currentSpeed *= 1.8; 

        if (input.isActionDown('left', db.keyConfig)) {
            this.vx = -currentSpeed; this.isMoving = true; this.faceRight = false;
        } else if (input.isActionDown('right', db.keyConfig)) {
            this.vx = currentSpeed; this.isMoving = true; this.faceRight = true;
        } else {
            if (this.onIce) {
                this.vx *= 0.95; 
            } else {
                this.vx = 0; 
            }
        }

        const effectiveJumpPower = db.megaCheatActive ? this.jumpPower * 1.5 : this.jumpPower;
        let jumpPressed = input.isActionDown('jump', db.keyConfig);
        if (jumpPressed && !this.jumpInputProcessed) {
            if (this.onGround) {
                this.vy = effectiveJumpPower; this.onGround = false;
                this.jumpCount = 1; this.jumpInputProcessed = true;
                audio.playJump();
            } else if (this.jumpCount === 1) { 
                this.vy = effectiveJumpPower / 2; this.jumpCount = 2;
                this.jumpInputProcessed = true; audio.playJump();
            }
        }
        if (!jumpPressed) this.jumpInputProcessed = false; 

        this.shootTimer -= dt;
        if (input.isActionDown('shoot', db.keyConfig) && this.shootTimer <= 0 && this.ammo > 0) {
            this.shootTimer = 0.3;
            this.ammo--;
            game.updateHUD();
            audio.playShoot();
            let pX = this.faceRight ? this.x + this.w : this.x - 10;
            let dir = this.faceRight ? 1 : -1;
            game.spawnBullet(pX, this.y + (this.isBig ? 22 : 10), dir, false);
        }

        this.vy += this.gravity * dt;
        if(this.vy > 800) this.vy = 800;
    }

    draw(ctx, cameraX) {
        if(this.invincibleTimer > 0 && Math.floor(this.time * 20) % 2 === 0) return;
        ctx.save();
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        
        let bodyColor = '#f90';
        if (db.megaCheatActive) {
            // レインボーカラー
            let hue = Math.floor(this.time * 200) % 360;
            bodyColor = `hsl(${hue}, 100%, 55%)`;
        } else if (this.boostTimer > 0) {
            bodyColor = (Math.floor(this.time * 15) % 2 === 0) ? '#ff0' : '#fff';
        } else if (this.poisonTimer > 0) {
            let t = Math.floor(this.time * 10) % 2;
            bodyColor = t === 0 ? '#808' : '#f00'; 
        }

        ctx.translate(dx, dy);
        if (this.isMega) ctx.scale(3.0, 3.0);
        else if (this.isBig) ctx.scale(1.5, 1.5);

        ctx.fillStyle = bodyColor;
        ctx.fillRect(0, 0, 30, 30);
        // Eyes
        ctx.fillStyle = '#000';
        let off = this.faceRight ? 20 : 2;
        ctx.fillRect(off, 8, 4, 4); ctx.fillRect(off + 6, 8, 4, 4);
        // Ears
        ctx.fillStyle = bodyColor;
        ctx.fillRect(0, -4, 6, 4); ctx.fillRect(24, -4, 6, 4);
        
        // Wagging Tail (Fixed to bottom 1/3)
        ctx.fillStyle = bodyColor;
        let tailX = this.faceRight ? -6 : 26;
        let tailSwing = Math.sin(this.time * 12) * 3; // Reduced swing
        ctx.fillRect(tailX, 24 + tailSwing, 10, 4); // Positioned at bottom 1/3 (y=24 is 80% down)
        
        ctx.restore();
    }
}

class Enemy extends Entity {
    constructor(x, y, type) {
        super(x, type==='L' ? y : y + 10, type==='L'? 40: 30, type==='L'? 40: 30);
        this.type = type; 
        this.baseY = this.y;
        this.color = '#808080'; this.eyeColor = '#FFFF00';
        this.health = 2; this.shootTimer = 0;
        this.ghost = false;
        
        if (type === 'E') { this.vx = -80; }
        else if (type === 'F') { this.vx = -180; this.color = '#111'; this.eyeColor = '#FF3333'; }
        else if (type === 'J') { this.vx = -90; this.color = '#D2B48C'; this.eyeColor = '#00FF00'; this.jumpTimer = 0; }
        else if (type === 'V') { this.vx = -120; this.vy = 0; this.color = '#4682B4'; this.eyeColor = '#00FFFF'; this.y = y; this.baseY = y; }
        else if (type === 'S') { this.vx = 0; this.color = '#FF4500'; this.eyeColor = '#FFFFFF'; }
        else if (type === 'L') { this.vx = -40; this.color = '#8B008B'; this.eyeColor = '#FF1493'; this.health = 10; }
        else if (type === 'W') { this.vx = 0; this.vy = 0; this.color = 'rgba(255, 255, 255, 0.6)'; this.eyeColor = '#333'; this.ghost = true; } 
        else if (type === 'H') { this.vx = -60; this.color = '#708090'; this.eyeColor = '#DC143C'; this.health = 4; } 
        else if (type === 'Y') { this.vx = 0; this.color = '#006400'; this.eyeColor = '#ADFF2F'; this.shootTimer = 0; } 
        else if (type === 'Z') { this.vx = 0; this.color = '#FFA500'; this.eyeColor = '#FFFFFF'; } 
        else if (type === 'U') { this.vx = -100; this.vy = 0; this.color = '#9400D3'; this.eyeColor = '#FFFF00'; this.shootTimer = 0; this.ghost = true; this.y -= 100; this.baseY = this.y; this.health = 4; }
        if (db.enemyHPCheat) this.health = 1;
    }
    update(dt, game) {
        super.update(dt);
        if (!this.ghost && this.type !== 'V') {
            this.vy += 1600 * dt; 
            if (this.type === 'J') {
                this.jumpTimer += dt;
                if (this.jumpTimer > 1.5 && this.vy === 0) { this.vy = -600; this.jumpTimer = 0; }
            }
        } else if (this.type === 'V') {
            this.y = this.baseY + Math.sin(this.time * 3) * 15; this.vy = 0; 
        }

        if (this.type === 'S' && game && game.player) {
            let dir = game.player.x < this.x ? -1 : 1;
            this.shootTimer += dt;
            if (this.shootTimer > 2.0 && Math.abs(game.player.x - this.x) < 500) {
                this.shootTimer = 0;
                game.spawnBullet(dir === 1 ? this.x + this.w : this.x - 10, this.y + 10, dir, true);
            }
        }
        if (game && game.player) {
            if (this.type === 'W') {
                let dx = game.player.x - this.x; let dy = game.player.y - this.y;
                let dist = Math.sqrt(dx*dx + dy*dy);
                if (dist > 0 && dist < 600) { this.vx = (dx/dist) * 60; this.vy = (dy/dist) * 60; }
            } else if (this.type === 'Z') {
                if (Math.abs(game.player.y - this.y) < 50 && Math.abs(game.player.x - this.x) < 300) {
                    this.vx = game.player.x < this.x ? -300 : 300;
                } else { this.vx *= 0.95; }
            } else if (this.type === 'Y') {
                let dir = game.player.x < this.x ? -1 : 1;
                this.shootTimer += dt;
                if (this.shootTimer > 1.2 && Math.abs(game.player.x - this.x) < 600) {
                    this.shootTimer = 0;
                    let b = new Projectile(dir === 1 ? this.x + this.w : this.x - 10, this.y + 5, dir, true);
                    b.vx *= 1.8;
                    game.bullets.push(b);
                }
            } else if (this.type === 'U') {
                if(this.x < game.cameraX - 50) this.x = game.cameraX + 1050;
                if(this.x > game.cameraX + 1050) this.x = game.cameraX - 50; 
                this.shootTimer += dt;
                if (this.shootTimer > 1.5 && Math.abs(game.player.x - this.x) < 300) {
                    this.shootTimer = 0;
                    game.bullets.push(new Projectile(this.x + 10, this.y + 30, 0, true, 300));
                }
                this.y = this.baseY + Math.sin(this.time * 2) * 20; this.vy = 0;
            }
        }
    }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        ctx.fillStyle = this.color; ctx.fillRect(dx, dy, this.w, this.h);
        // Ears
        ctx.fillRect(dx, dy - 4, 6, 4); 
        ctx.fillRect(dx + this.w - 6, dy - 4, 6, 4);

        ctx.fillStyle = this.eyeColor;
        let off = this.vx > 0 ? 20 : 4;
        ctx.fillRect(dx + off, dy + 6, 4, 4); ctx.fillRect(dx + off + 6, dy + 6, 4, 4);
        
        // Flying Wings for types V, U, W
        if (['V', 'U', 'W'].includes(this.type)) {
            let flap = Math.sin(this.time * 15) * 8;
            ctx.fillStyle = '#fff'; // Changed from this.color to white
            ctx.fillRect(dx - 8, dy + 5 + flap, 8, 4); // Left wing
            ctx.fillRect(dx + this.w, dy + 5 + flap, 8, 4); // Right wing
        }

        // Enemy Tail (Fixed to bottom 1/3)
        ctx.fillStyle = this.color;
        let tDir = this.vx > 0 ? -1 : 1;
        let tOff = tDir === 1 ? this.w : -6;
        let tSwing = Math.sin(this.time * 10 + (dx/100)) * (this.h / 10);
        ctx.fillRect(dx + tOff, dy + this.h * 0.8 + tSwing, 8, 4);
        
        // HP Hearts
        for(let i=0; i<this.health; i++) {
            ctx.fillStyle = '#f00';
            ctx.fillRect(dx + (i*10) % this.w, dy - 12 - Math.floor(i*10/this.w)*10, 8, 8);
        }
    }
}

class Goal extends Entity {
    constructor(x, y) { super(x, y, TILE_SIZE, TILE_SIZE * 2); }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        ctx.fillStyle = '#777'; ctx.fillRect(dx + 15, dy, 10, this.h);
        ctx.fillStyle = '#f00'; ctx.fillRect(dx + 25, dy, 30, 20);
    }
}

class Checkpoint extends Entity {
    constructor(x, y) {
        super(x, y, TILE_SIZE, TILE_SIZE * 2);
        this.activated = false;
    }
    trigger() {
        if (!this.activated) {
            this.activated = true;
            audio.playStart();
            return true;
        }
        return false;
    }
    draw(ctx, cameraX) {
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        ctx.fillStyle = '#8B4513'; ctx.fillRect(dx + 18, dy, 4, this.h); 
        ctx.fillStyle = this.activated ? '#0f0' : '#f00'; 
        ctx.fillRect(dx + 22, dy, 20, 15);
    }
}

class Coin extends Entity {
    constructor(x, y) { super(x + 10, y + 10, 20, 20); this.collected = false; }
    draw(ctx, cameraX) {
        if (this.collected) return;
        if (this.x - cameraX > 1000 || this.x + this.w - cameraX < -50) return;
        let dx = Math.floor(this.x - cameraX); let dy = Math.floor(this.y);
        if (db.megaCheatActive) {
            // BigCoin appearance (40x40)
            ctx.fillStyle = '#ff0'; ctx.fillRect(dx - 10, dy - 10, 40, 40);
            ctx.fillStyle = '#da0'; ctx.fillRect(dx - 2, dy - 2, 24, 24);
            ctx.fillStyle = '#fff'; ctx.fillRect(dx + 2, dy + 2, 8, 8);
        } else {
            ctx.fillStyle = '#ff0'; ctx.fillRect(dx + 4, dy + 4, 12, 12);
            ctx.fillStyle = '#da0'; ctx.fillRect(dx + 8, dy + 8, 4, 4);
        }
    }
}

// --------- Game Manager ---------
class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.input = new Input();
        
        this.appState = 'TITLE'; this.engineState = 'playing'; 
        this.currentStageNum = 1; this.cameraX = 0;
        this.stageTimer = 180;

        this.screens = {
            title: document.getElementById('title-screen'),
            select: document.getElementById('stage-select-screen'),
            game: document.getElementById('game-screen'),
            shop: document.getElementById('shop-screen'),
            settings: document.getElementById('settings-screen')
        };
        this.tutorialStep = 0;
        this.inTutorial = false;
        this.rebindingAction = null;
        this.stageScore = 0;

        document.getElementById('btn-start').addEventListener('click', () => {
            // db.hardReset(); // Progress is now preserved
            audio.playStart(); this.showScreen('select'); this.updateSelectScreen();
        });

        for(let i=1; i<=5; i++){
            document.getElementById(`btn-stage-${i}`).addEventListener('click', () => {
                audio.playSelect(); this.currentStageNum = i; 
                if (!db.enemyHPCheat) db.life = db.hpUpgradeBought ? 4 : 3;
                db.save();
                this.startGame();
            });
        }
        document.getElementById('btn-back-to-title-from-select').addEventListener('click', () => {
            audio.playSelect(); this.showScreen('title');
        });

        document.getElementById('retry-btn').addEventListener('click', () => {
            audio.playSelect();
            audio.stopBGM();
            if(db.life <= 0) {
                db.life = db.enemyHPCheat ? 100 : (db.hpUpgradeBought ? 4 : 3);
                db.save();
                this.startGame();
            } else {
                this.startGame();
            }
        });
        document.getElementById('go-title-btn').addEventListener('click', () => {
            audio.playSelect(); audio.stopBGM();
            if (db.life <= 0) {
                db.life = 3;
                db.save();
                this.showScreen('title');
            } else {
                this.showScreen('title');
            }
        });
        
        document.getElementById('next-stage-btn').addEventListener('click', () => {
            audio.playSelect(); audio.stopBGM();
            this.currentStageNum++;
            if (this.currentStageNum > 5) this.currentStageNum = 5;
            if (!db.enemyHPCheat) db.life = db.hpUpgradeBought ? 4 : 3;
            db.save();
            this.startGame();
        });
        document.getElementById('clear-to-select-btn').addEventListener('click', () => {
            audio.playSelect(); audio.stopBGM();
            this.showScreen('select'); this.updateSelectScreen();
        });
        
        document.getElementById('btn-reset-progress').addEventListener('click', () => {
            audio.playSelect();
            document.getElementById('reset-confirm-prompt').classList.remove('hidden');
        });

        document.getElementById('btn-reset-no').addEventListener('click', () => {
            audio.playSelect();
            document.getElementById('reset-confirm-prompt').classList.add('hidden');
        });

        document.getElementById('btn-reset-yes').addEventListener('click', () => {
            db.hardReset();
            this.updateSelectScreen();
            audio.playDeath();
            document.getElementById('reset-confirm-prompt').classList.add('hidden');
        });

        document.getElementById('btn-shop').addEventListener('click', () => {
            audio.playSelect();
            this.showScreen('shop');
            this.updateShopUI();
        });

        document.getElementById('btn-buy-hp').addEventListener('click', () => {
            if (!db.hpUpgradeBought && db.coins >= 100) {
                db.coins -= 100;
                db.hpUpgradeBought = true;
                db.life = 4; // Update current life to new max
                db.save();
                audio.playStart();
                this.updateShopUI();
            }
        });

        document.getElementById('btn-back-from-shop').addEventListener('click', () => {
            audio.playSelect();
            this.showScreen('title');
        });

        // Settings Event Listeners
        document.getElementById('btn-settings').addEventListener('click', () => {
            audio.playSelect();
            this.showScreen('settings');
            this.updateSettingsUI();
        });

        document.getElementById('btn-back-from-settings').addEventListener('click', () => {
            audio.playSelect();
            this.rebindingAction = null;
            this.showScreen('title');
        });

        document.querySelectorAll('.btn-rebind').forEach(btn => {
            btn.addEventListener('click', (e) => {
                audio.playSelect();
                this.startRebinding(e.target.dataset.action);
            });
        });

        window.addEventListener('keydown', (e) => {
            if (this.rebindingAction) {
                e.preventDefault();
                db.keyConfig[this.rebindingAction] = e.code;
                db.save();
                this.rebindingAction = null;
                this.updateSettingsUI();
                audio.playStart();
            }
        });

        // Tutorial Event Listeners
        document.getElementById('btn-tutorial-yes').addEventListener('click', () => {
            audio.playSelect();
            document.getElementById('tutorial-prompt').classList.add('hidden');
            this.startTutorial();
        });

        document.getElementById('btn-tutorial-no').addEventListener('click', () => {
            audio.playSelect();
            document.getElementById('tutorial-prompt').classList.add('hidden');
            this.beginGame();
        });

        document.getElementById('btn-tutorial-next').addEventListener('click', () => {
            audio.playSelect();
            this.nextTutorialStep();
        });

        this.lastTime = performance.now();
        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
        window.addEventListener('cheat-activated', () => this.activateCheat());
    }
    
    showScreen(id) {
        Object.values(this.screens).forEach(s => s.classList.add('hidden'));
        this.screens[id].classList.remove('hidden');
        this.appState = id === 'game' ? 'PLAYING' : id.toUpperCase();
        
        // Automatic BGM switching on screen changes
        if (id === 'title') audio.startBGM('title');
        else if (id === 'select') audio.startBGM('select');
        else if (id === 'game') audio.startBGM('game');
    }

    activateCheat() {
        db.coins = 10000;
        db.life = 100;
        db.maxStage = 5;
        db.enemyHPCheat = true;
        db.megaCheatActive = true;
        db.save();
        
        // 敵HP1
        if (this.enemies) this.enemies.forEach(e => e.health = 1);
        
        // プレイヤーをメガ化＆5回耐える
        if (this.player) this.player.makeMegaCheat();
        
        this.updateHUD();
        this.updateSelectScreen();
        this.updateShopUI();
        
        if (this.texts) {
            let tx = this.player ? this.player.x : (this.cameraX + 400);
            let ty = this.player ? this.player.y - 80 : 260;
            this.texts.push(new FloatingText(tx, ty, "★ CHEAT ACTIVATED! ★", "#FFD700"));
            this.texts.push(new FloatingText(tx, ty + 40, "MEGA・SPEED・RAINBOW!", "#00FFFF"));
        }
        audio.playClear();
    }

    updateSelectScreen() {
        document.getElementById('total-coins').textContent = db.coins;
        document.getElementById('select-life').textContent = db.life;
        document.getElementById('select-score').textContent = db.score;
        for(let i=1; i<=5; i++) document.getElementById(`btn-stage-${i}`).disabled = i > db.maxStage;
    }

    updateShopUI() {
        document.getElementById('shop-coins').textContent = db.coins;
        const btn = document.getElementById('btn-buy-hp');
        if (db.hpUpgradeBought) {
            btn.textContent = "購入済み";
            btn.disabled = true;
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
        } else {
            btn.textContent = "100 コイン";
            btn.disabled = db.coins < 100;
        }
    }

    updateHUD() {
        document.getElementById('score-display').textContent = `ステージ: ${this.currentStageNum}`;
        document.getElementById('score-text-display').textContent = `スコア: ${this.stageScore}`;
        document.getElementById('coin-display').textContent = db.coins;
        document.getElementById('life-display').textContent = `ライフ: ${db.life}`;
        if(this.player) {
            document.getElementById('ammo-display').textContent = `弾: ${this.player.ammo} / 30`;
        }
        document.getElementById('time-display').textContent = Math.ceil(Math.max(0, this.stageTimer));
    }

    updateSettingsUI() {
        document.getElementById('rebind-prompt').textContent = this.rebindingAction ? "キーを入力してください..." : "";
        document.querySelectorAll('.btn-rebind').forEach(btn => {
            const action = btn.dataset.action;
            let val = db.keyConfig[action];
            if (Array.isArray(val)) {
                val = val.map(k => k.replace('Key', '').replace('Arrow', '')).join(' / ');
            } else {
                val = val.replace('Key', '').replace('Arrow', '');
            }
            btn.textContent = val;
            if (this.rebindingAction === action) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    startRebinding(action) {
        this.rebindingAction = action;
        this.updateSettingsUI();
    }

    spawnBullet(x, y, dir, isEnemyBullet) {
        this.bullets.push(new Projectile(x, y, dir, isEnemyBullet));
    }

    addScore(x, y, points, type="text") {
        this.stageScore += points;
        db.addScore(points);
        let color = type === "coin" ? "#FFD700" : (type === "mushroom" ? "#FF9800" : "#FFF");
        this.texts.push(new FloatingText(x, y, `+${points}`, color));
    }

    startGame() {
        if (this.currentStageNum === 1) {
            document.getElementById('tutorial-prompt').classList.remove('hidden');
        } else {
            this.beginGame();
        }
    }

    beginGame() {
        this.showScreen('game');
        document.getElementById('game-over-screen').classList.add('hidden');
        document.getElementById('clear-screen').classList.add('hidden');
        
        this.engineState = 'playing';
        this.stageTimer = 180;
        this.stageScore = 0; // Reset score for the stage
        this.loadLevel(LEVELS[this.currentStageNum - 1]);
        this.updateHUD();
        this.lastTime = performance.now();
        audio.startBGM();
    }

    startTutorial() {
        this.inTutorial = true;
        this.tutorialStep = 0;
        this.showScreen('game');
        this.loadLevel(LEVELS[0]);
        this.engineState = 'paused';
        document.getElementById('tutorial-overlay').classList.remove('hidden');
        this.showTutorialStep();
    }

    showTutorialStep() {
        const steps = [
            { title: "移動", text: "「←」「→」キーまたは「A」「D」キーで左右に移動！" },
            { title: "ジャンプ", text: "「↑」キーまたは「W」キーでジャンプ！\n空中でもう一度押すと2段ジャンプできるよ！" },
            { title: "攻撃", text: "「スペース」キーで弾を発射！\n敵を倒したり障害物を避けるのに使おう。" },
            { title: "アイテム", text: "「？」ブロックを叩くとアイテムが出るよ！\n毒キノコ（紫）は取ると5秒後にミスになるから注意！" },
            { title: "ゴール", text: "右の奥にある赤い旗のゴールを目指して進もう！" }
        ];
        const step = steps[this.tutorialStep];
        document.getElementById('tutorial-title').textContent = step.title;
        document.getElementById('tutorial-text').textContent = step.text;
        document.getElementById('btn-tutorial-next').textContent = (this.tutorialStep === steps.length - 1) ? "ゲーム開始！" : "次へ";
    }

    nextTutorialStep() {
        this.tutorialStep++;
        const stepsCount = 5; 
        if (this.tutorialStep >= stepsCount) {
            this.closeTutorial();
        } else {
            this.showTutorialStep();
        }
    }

    closeTutorial() {
        this.inTutorial = false;
        document.getElementById('tutorial-overlay').classList.add('hidden');
        this.beginGame();
    }

    loadLevel(data) {
        this.blocks = []; this.enemies = []; this.coins = []; this.bullets = []; this.items = []; this.texts = [];
        this.checkpoints = [];
        this.goal = null; this.player = null;
        
        for (let row = 0; row < data.length; row++) {
            for (let col = 0; col < data[row].length; col++) {
                const char = data[row][col];
                const x = col * TILE_SIZE; const y = row * TILE_SIZE;
                
                if (char === 'B') this.blocks.push(new Block(x, y));
                else if (char === 'Q') this.blocks.push(new QBlock(x, y));
                else if (char === 'T') this.blocks.push(new TrampolineBlock(x, y));
                else if (char === 'D') this.blocks.push(new CrumbleBlock(x, y));
                else if (char === 'K') this.blocks.push(new SpikeBlock(x, y));
                else if (char === 'I') this.blocks.push(new IceBlock(x, y));
                else if (char === '>') this.blocks.push(new ConveyorBlock(x, y, true));
                else if (char === '<') this.blocks.push(new ConveyorBlock(x, y, false));
                else if (char === 'O') this.blocks.push(new BoostBlock(x, y));
                else if (char === 'N') this.checkpoints.push(new Checkpoint(x, y - TILE_SIZE));
                else if (char === 'P') this.player = new Player(x, y);
                else if (['E', 'F', 'J', 'V', 'S', 'L', 'W', 'H', 'Y', 'Z', 'U'].includes(char)) this.enemies.push(new Enemy(x, y, char));
                else if (char === 'C') this.coins.push(new Coin(x, y));
                else if (char === 'G') this.goal = new Goal(x, y - TILE_SIZE);
            }
        }
        
        if (!this.player) this.player = new Player(50, 50);
        
        // Spawn at checkpoint if available
        if (db.checkpoint && db.checkpoint.stage === this.currentStageNum && db.checkpoint.x !== null) {
            this.player.x = db.checkpoint.x;
            this.player.y = db.checkpoint.y;
            // Mark the checkpoint as activated
            for (let cp of this.checkpoints) {
                if (Math.abs(cp.x - db.checkpoint.x) < 5 && Math.abs(cp.y - db.checkpoint.y) < 5) {
                    cp.activated = true;
                }
            }
        }

        this.player.ammo = 30;
        this.cameraX = Math.max(0, this.player.x - 500);
    }

    handleCollisions(dt) {
        this.player.x += this.player.vx * dt;
        if (this.player.conveyorSpeed) this.player.x += this.player.conveyorSpeed * dt;
        if (this.player.x < 0) this.player.x = 0; 
        this.blocks = this.blocks. filter(b => !b.dead);
        for (let b of this.blocks) {
            if (this.player.checkCollision(b)) {
                if (b instanceof SpikeBlock && this.player.invincibleTimer <= 0) {
                    this.player.damage(this.player.x - b.x, () => this.triggerGameOver());
                }
                if (this.player.vx > 0) { this.player.x = b.x - this.player.w; this.player.vx = 0; }
                else if (this.player.vx < 0) { this.player.x = b.x + b.w; this.player.vx = 0; }
            }
        }

        this.player.y += this.player.vy * dt;
        this.player.onGround = false;
        this.player.onIce = false;
        this.player.conveyorSpeed = 0;
        for (let b of this.blocks) {
            if (this.player.checkCollision(b)) {
                if (this.player.vy > 0) {
                    this.player.y = b.y - this.player.h;
                    this.player.vy = 0; this.player.onGround = true; this.player.jumpCount = 0; 
                    if (b instanceof IceBlock) this.player.onIce = true;
                    if (b instanceof ConveyorBlock) this.player.conveyorSpeed = b.isRight ? 150 : -150;
                    if (b instanceof TrampolineBlock) {
                        b.trigger();
                        this.player.vy = -950;
                        this.player.onGround = false;
                    }
                    if (b instanceof BoostBlock) {
                        b.trigger(this.player);
                    }
                    if (b instanceof CrumbleBlock) {
                        b.trigger();
                    }
                } else if (this.player.vy < 0) {
                    this.player.y = b.y + b.h;
                    this.player.vy = 0;
                    if (b instanceof QBlock && !b.hit) {
                        b.trigger(this);
                    }
                }
            }
        }

        for (let item of this.items) {
            item.x += item.vx * dt;
            for(let b of this.blocks) {
                if (item.checkCollision(b)) {
                    if (item.vx > 0) item.x = b.x - item.w;
                    else if (item.vx < 0) item.x = b.x + b.w;
                    item.vx *= -1; break;
                }
            }
            item.y += item.vy * dt;
            for(let b of this.blocks) {
                if (item.checkCollision(b)) {
                    if (item.vy > 0) { item.y = b.y - item.h; item.vy = 0; }
                    else if (item.vy < 0) { item.y = b.y + b.h; item.vy = 0; }
                }
            }
        }

        for (let e of this.enemies) {
            if (!e.ghost) e.x += e.vx * dt;
            else e.x += e.vx * dt; 
            
            if (!e.ghost) {
                for (let b of this.blocks) {
                    if (e.checkCollision(b)) {
                        if (e.vx > 0) e.x = b.x - e.w; else if (e.vx < 0) e.x = b.x + b.w;
                        e.vx *= -1; break;
                    }
                }
            }
            if (e.type !== 'V' && !e.ghost) {
                e.y += e.vy * dt;
                for (let b of this.blocks) {
                    if (e.checkCollision(b)) {
                        if (e.vy > 0) { e.y = b.y - e.h; e.vy = 0; if(e.type === 'J') e.jumpTimer = 0; }
                        else if (e.vy < 0) { e.y = b.y + b.h; e.vy = 0; }
                    }
                }
            } else if (e.ghost && e.type === 'W') {
                e.y += e.vy * dt; // Ghost moves in Y without checks
            }
        }

        for (let b of this.bullets) {
            for (let block of this.blocks) {
                if(b.checkCollision(block)) { 
                    b.dead = true; 
                    if (block instanceof QBlock && !block.hit && !b.isEnemyBullet) {
                        block.trigger(this);
                    }
                    break; 
                }
            }
        }
    }

    triggerGameOver() {
        this.engineState = 'gameover';
        audio.stopBGM();
        audio.playDeath();
        let overlay = document.getElementById('game-over-screen');
        db.life--; db.save();
        
        let titleBtn = document.getElementById('go-title-btn');
        let retryBtn = document.getElementById('retry-btn');
        
        if (db.life <= 0) {
            db.score -= 500;
            if (db.score < 0) db.score = 0; // スコアがマイナスにならないように
            db.coins -= 10;
            if (db.coins < 0) db.coins = 0; // コインがマイナスにならないように
            db.save();

            overlay.querySelector('h1').textContent = "ゲームオーバー";
            retryBtn.textContent = "コンテニュー (このステージをやり直す)";
            titleBtn.textContent = "タイトルへ";
        } else {
            overlay.querySelector('h1').textContent = "ミス！";
            retryBtn.textContent = `リトライ (残りライフ ${db.life})`;
            titleBtn.textContent = "タイトルへ";
        }
        overlay.classList.remove('hidden');
    }

    triggerClear() {
        this.engineState = 'clear';
        audio.stopBGM(); audio.playClear(); 

        // Calculate Bonuses
        const timeBonus = Math.max(0, Math.ceil(this.stageTimer)) * 2;
        const ammoBonus = this.player.ammo * 10;
        const lifeBonus = db.life * 20;
        const totalBonus = timeBonus + ammoBonus + lifeBonus;

        this.stageScore += totalBonus;
        db.addScore(totalBonus);

        document.getElementById('clear-time-bonus').textContent = `${timeBonus} pt`;
        document.getElementById('clear-ammo-bonus').textContent = `${ammoBonus} pt`;
        document.getElementById('clear-life-bonus').textContent = `${lifeBonus} pt`;

        if (db.maxStage <= this.currentStageNum) {
            db.maxStage = Math.min(5, this.currentStageNum + 1); 
        }
        // Clear checkpoint on stage clear
        db.checkpoint = { x: null, y: null, stage: null };
        db.save();
        
        // Calculate Rank
        let rank = 'D';
        let color = '#fff';
        if (this.stageScore >= 2000) { rank = 'SS'; color = '#00ffff'; }
        else if (this.stageScore >= 1500) { rank = 'S'; color = '#f1c40f'; }
        else if (this.stageScore >= 1000) { rank = 'A'; color = '#e74c3c'; }
        else if (this.stageScore >= 500) { rank = 'B'; color = '#9b59b6'; }
        else if (this.stageScore >= 200) { rank = 'C'; color = '#2ecc71'; }
        
        document.getElementById('clear-score-display').textContent = `スコア: ${this.stageScore}`;
        const rankDisplay = document.getElementById('clear-rank-display');
        rankDisplay.textContent = `RANK: ${rank}`;
        rankDisplay.style.color = color;

        let nextBtn = document.getElementById('next-stage-btn');
        if (this.currentStageNum >= 5) {
            document.getElementById('clear-title').textContent = "全ステージクリア！！";
            nextBtn.style.display = 'none';
        } else {
            document.getElementById('clear-title').textContent = "ステージクリア！";
            nextBtn.style.display = 'inline-block';
        }
        document.getElementById('clear-screen').classList.remove('hidden');
    }

    updateEngine(dt) {
        if (this.engineState !== 'playing') return;

        this.stageTimer -= dt;
        if(this.stageTimer <= 0) {
            this.stageTimer = 0;
            this.triggerGameOver();
        }

        this.player.update(dt, this.input, this);
        for(let e of this.enemies) e.update(dt, this);
        for(let c of this.coins) c.update(dt);
        for(let b of this.blocks) { if(b.update) b.update(dt); }
        for(let i of this.items) i.update(dt);
        for(let b of this.bullets) b.update(dt);
        for(let t of this.texts) t.update(dt);
        for(let cp of this.checkpoints) cp.update(dt);
        if(this.goal) this.goal.update(dt);

        this.handleCollisions(dt);

        let targetCamX = this.player.x - 500;
        this.cameraX += (targetCamX - this.cameraX) * 5 * dt; 
        if (this.cameraX < 0) this.cameraX = 0; 
        
        this.updateHUD(); // Called frequently to update time and ammo

        for (let c of this.coins) {
            if (!c.collected && this.player.checkCollision(c)) {
                c.collected = true; audio.playCoin();
                if (db.megaCheatActive) {
                    // デカコイン: 5枚分
                    db.addCoin(); db.addCoin(); db.addCoin(); db.addCoin(); db.addCoin();
                    this.addScore(c.x + 10, c.y, 50, "coin");
                } else {
                    db.addCoin(); 
                    this.addScore(c.x + 10, c.y, 10, "coin");
                }
            }
        }

        for (let item of this.items) {
            if (!item.dead && this.player.checkCollision(item)) {
                item.dead = true;
                if (item.type === 'M') { this.player.makeBig(); this.addScore(this.player.x + this.player.w/2, this.player.y, 100, "mushroom"); }
                else if (item.type === 'X') { this.player.poison(); }
                else if (item.type === 'A') { this.player.ammo = Math.min(30, this.player.ammo + 5); audio.playCoin(); }
                else if (item.type === 'H') { 
                    const maxLife = db.hpUpgradeBought ? 4 : 3;
                    db.life = Math.min(maxLife, db.life + 1); 
                    audio.playCoin(); 
                    db.save();
                    this.updateHUD(); 
                }
                else if (item.type === 'C') { audio.playCoin(); db.addCoin(); this.addScore(item.x, item.y, 10, "coin"); }
                else if (item.type === 'BC') { 
                    audio.playCoin(); 
                    db.addCoin(); db.addCoin(); db.addCoin(); db.addCoin(); db.addCoin(); 
                    this.addScore(item.x, item.y, 50, "coin"); 
                }
            }
        }
        this.items = this.items.filter(i => !i.dead);

        for (let b of this.bullets) {
            if (b.dead) continue;
            if (b.isEnemyBullet) {
                if (b.checkCollision(this.player)) { 
                    b.dead = true;
                    this.player.damage(this.player.x - b.x, () => this.triggerGameOver()); 
                }
            } else {
                for (let e of this.enemies) {
                    if (b.checkCollision(e)) {
                        b.dead = true; e.health--;
                        this.texts.push(new FloatingText(e.x + e.w/2, e.y, "-1", "#ff4444"));
                        if (e.health <= 0) { 
                            e.dead = true; audio.playStomp(); 
                            this.addScore(e.x + e.w/2, e.y, e.type === 'L' ? 150 : 50, "enemy");
                            this.items.push(new Item(e.x + e.w/2 - 10, e.y, e.type === 'L' ? 'BC' : 'C'));
                        }
                        break;
                    }
                }
            }
        }
        this.bullets = this.bullets.filter(b => !b.dead);

        for (let e of this.enemies) {
            if (this.player.checkCollision(e) && this.player.invincibleTimer <= 0) {
                if (this.player.vy > 0 && this.player.y + this.player.h < e.y + 20) {
                    if (e.type === 'L' || e.type === 'H') {
                        this.player.damage(this.player.x - e.x, () => this.triggerGameOver());
                    } else {
                        e.dead = true; audio.playStomp(); this.player.vy = this.player.jumpPower * 0.7; 
                        this.addScore(e.x + e.w/2, e.y, 50, "enemy");
                        this.items.push(new Item(e.x + e.w/2 - 10, e.y, 'C'));
                    }
                } else {
                    this.player.damage(this.player.x - e.x, () => this.triggerGameOver());
                }
            }
        }
        this.enemies = this.enemies.filter(e => !e.dead);
        this.texts = this.texts.filter(t => !t.dead);

        for (let cp of this.checkpoints) {
            if (this.player.checkCollision(cp)) {
                if (cp.trigger()) {
                    db.checkpoint = { x: cp.x, y: cp.y, stage: this.currentStageNum };
                    db.save();
                    this.texts.push(new FloatingText(cp.x + 20, cp.y, "CHECKPOINT!", "#0f0"));
                }
            }
        }

        if (this.goal && this.player.checkCollision(this.goal)) { this.triggerClear(); }
        if (this.player.y > this.canvas.height) { this.triggerGameOver(); }
    }

    drawEngine(ctx) {
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        ctx.fillStyle = '#008'; // Dark blue sky
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        let cloudOffset = Math.floor(this.cameraX * 0.2) % 1000;
        for(let i=0; i<3; i++) {
            let cx = 200 + i*600 - cloudOffset;
            ctx.fillRect(cx, 100, 80, 20); ctx.fillRect(cx + 20, 80, 40, 20);
        }

        if (this.goal) this.goal.draw(ctx, this.cameraX);
        for (let c of this.coins) c.draw(ctx, this.cameraX);
        for (let b of this.blocks) { b.draw(ctx, this.cameraX); } 
        for (let c of this.items) c.draw(ctx, this.cameraX);
        for (let e of this.enemies) e.draw(ctx, this.cameraX);
        for (let b of this.bullets) b.draw(ctx, this.cameraX);
        if (this.player) this.player.draw(ctx, this.cameraX);
        for (let cp of this.checkpoints) cp.draw(ctx, this.cameraX);
        for (let t of this.texts) t.draw(ctx, this.cameraX);
    }

    loop(timestamp) {
        let dt = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;
        if (dt > 0.1) dt = 0.1;
        
        if (this.appState === 'PLAYING') {
            this.updateEngine(dt);
            this.drawEngine(this.ctx);
        }
        requestAnimationFrame(this.loop);
    }
}

window.onload = () => { 
    new Game(); 
    // Start Title BGM on first interaction
    window.addEventListener('click', () => { audio.startBGM('title'); }, { once: true });
};
