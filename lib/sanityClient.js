import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'u7z9hzou',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skIrZ4KCwS5IxMuVjDJ8mxSAYJ61yqLQX2kKE4Jcx79YkPAFqMZfrT1WuGIKdjyfXdoT89gnxIHigPR7pwSeOxTB2TUlHlt6Ia01iDfwAzeVYB92edmkFSTedeUvBQL6d4EJtWybx9CuGq10RjyTJgUHV4BKTBUE9mHKhbPJA7I2V5EcNJZJ',
    useCdn: false
})