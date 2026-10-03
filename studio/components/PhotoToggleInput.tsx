import { set, type ArrayOfObjectsInputProps } from 'sanity';

type Photo = { _key: string; url?: string; visible?: boolean };

// Small, fast thumbnails from Cloudinary for the Studio grid.
function thumbnail(url = '') {
  return url.replace('/image/upload/', '/image/upload/f_auto,q_auto,c_fill,w_240,h_240/');
}

// A grid of the series' photos. Clicking a photo hides or shows it on the site.
export function PhotoToggleInput(props: ArrayOfObjectsInputProps) {
  const photos = (props.value ?? []) as Photo[];
  const hiddenCount = photos.filter((p) => p.visible === false).length;

  if (photos.length === 0) {
    return <p style={{ margin: 0, opacity: 0.7 }}>No photos yet. Run `npm run sync` in studio/ to load them.</p>;
  }

  return (
    <div>
      <p style={{ margin: '0 0 12px', fontSize: 13, opacity: 0.75 }}>
        {photos.length - hiddenCount} showing · {hiddenCount} hidden. Click a photo to hide or show it, then Publish.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 8 }}>
        {photos.map((photo, index) => {
          const hidden = photo.visible === false;
          return (
            <button
              key={photo._key}
              type="button"
              disabled={props.readOnly}
              aria-pressed={hidden}
              title={hidden ? 'Hidden. Click to show on the site.' : 'Showing. Click to hide from the site.'}
              onClick={() => props.onChange(set(hidden, [{ _key: photo._key }, 'visible']))}
              style={{
                position: 'relative',
                padding: 0,
                border: hidden ? '2px dashed #e5484d' : '2px solid transparent',
                borderRadius: 6,
                background: '#111',
                cursor: props.readOnly ? 'default' : 'pointer',
                overflow: 'hidden',
              }}
            >
              <img
                src={thumbnail(photo.url)}
                alt=""
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover',
                  opacity: hidden ? 0.25 : 1,
                  filter: hidden ? 'grayscale(1)' : 'none',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: 4,
                  left: 6,
                  fontSize: 11,
                  fontFamily: 'monospace',
                  color: '#fff',
                  textShadow: '0 1px 2px #000',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              {hidden && (
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Hidden
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
