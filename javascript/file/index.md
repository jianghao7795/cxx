url to base64

function url2Base64(url, type = 'image/jpeg') {
return new Promise((resolve, reject) => {
const img = new Image()
const canvas = document.createElement('canvas');
img.crossOrigin = '\*';
img.onload = function () {
const width = img.width, height = img.height;
canvas.width = width;
canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, width, height);
            const base64 = canvas.toDataURL(type);
            resolve(base64);
        };
        img.onerror = function () {
            reject(new Error('message'));
        };
        img.src = url;
    });

}

blob to base64
function blob2Base64(blob) {
return new Promise((resolve, reject) => {
const reader = new FileReader();
reader.addEventListener('load', () => {
const base64 = reader.result?.toString() || '';
resolve(base64);
});
reader.addEventListener('error', () => {
reject(new Error('message'));
});
reader.readAsDataURL(blob);
});
}
url to blob
function url2Blob(url) {
return window.fetch(url).then(response => response.blob());
}
base64 to url
function base642Url(data) {
var parts = data.split(';base64,'),
contentType = parts[0].split(':')[1],
raw = window.atob(parts[1]),
length = raw.length,
arr = new Uint8Array(length);
for (var i = 0; i < length; i++) {
arr[i] = raw.charCodeAt(i);
}
var blob = new Blob([arr], { type: contentType });
return URL.createObjectURL(blob);
};
blob to file
new windown.File([blob], file.name, {type: file.type})
