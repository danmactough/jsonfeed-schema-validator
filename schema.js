module.exports = {
	// $id: 'https://jsonfeed.org/version/1', // @TODO get a URI for this schema
  $schema: 'http://json-schema.org/schema#',
  title: 'JSON Feed',
  type: 'object',
  properties: {
    version: {
      type: 'string',
      const: 'https://jsonfeed.org/version/1',
      description: 'the URL of the version of the format the feed uses'
    },
    title: {
      type: 'string',
      description: 'the name of the feed'
    },
    home_page_url: {
      type: 'string',
      format: 'uri',
      description: 'the URL of the resource that the feed describes'
    },
    feed_url: {
      type: 'string',
      format: 'uri',
      description: 'the URL of the feed, and serves as the unique identifier for the feed'
    },
    description: {
      type: 'string',
      description: 'provides more detail, beyond the title, on what the feed is about'
    },
    user_comment: {
      type: 'string',
      description: 'a description of the purpose of the feed'
    },
    next_url: {
      type: 'string',
      format: 'uri',
      description: 'the URL of a feed that provides the next n items, where n is determined by the publisher'
    },
    icon: {
      type: 'string',
      format: 'uri',
      description: 'the URL of an image for the feed suitable to be used in a timeline, much the way an avatar might be used'
    },
    favicon: {
      type: 'string',
      format: 'uri',
      description: 'the URL of an image for the feed suitable to be used in a source list'
    },
    author: {
      description: 'the author of the feed',
      $ref: '#/definitions/author'
    },
    expired: {
      type: 'boolean',
      description: 'whether or not the feed is finished — that is, whether or not it will ever update again'
    },
    hubs: {
      type: 'array',
      description: 'describes endpoints that can be used to subscribe to real-time notifications from the publisher of this feed',
      items: {
        type: 'object',
        properties: {
          type: {
            type: 'string'
          },
          'url': {
            type: 'string',
            format: 'uri'
          }
        },
        required: [ 'type', 'url' ]
      }
    },
    items: {
      type: 'array',
      items: {
        $ref: '#/definitions/item'
      }
    }
  },
  required: [ 'version', 'title', 'items' ],
  definitions: {
    attachment: {
      type: 'object',
      properties: {
        url: {
          type: 'string',
          format: 'uri',
          description: 'specifies the location of the attachment'
        },
        mime_type: {
          type: 'string',
          description: 'specifies the type of the attachment, such as "audio/mpeg"'
        },
        title: {
          type: 'string',
          description: 'is a name for the attachment. Important: if there are multiple attachments, and two or more have the exact same title (when title is present), then they are considered as alternate representations of the same thing. In this way a podcaster, for instance, might provide an audio recording in different formats'
        },
        size_in_bytes: {
          type: 'number',
          description: 'specifies how large the file is'
        },
        duration_in_seconds: {
          type: 'number',
          description: 'specifies how long it takes to listen to or watch, when played at normal speed'
        }
      },
      required: [ 'url', 'mime_type' ]
    },
    author: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'the author’s name'
        },
        url: {
          type: 'string',
          format: 'uri',
          description: 'the URL of a site owned by the author'
        },
        avatar: {
          type: 'string',
          format: 'uri',
          description: 'the URL for an image for the author'
        }
      },
      anyOf: [
				{ required: [ 'name' ] },
				{ required: [ 'url' ] },
				{ required: [ 'avatar' ] }
      ]
    },
    item: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'id is unique for that item for that feed over time'
        },
        url: {
          type: 'string',
          format: 'uri',
          description: 'the URL of the resource described by the item (also referred to as a permalink)'
        },
        external_url: {
          type: 'string',
          format: 'uri',
          description: 'the URL of a page elsewhere'
        },
        title: {
          type: 'string'
        },
        content_html: {
          type: 'string',
          description: 'the HTML of the item'
        },
        content_text: {
          type: 'string',
          description: 'the plain text of the item'
        },
        summary: {
          type: 'string',
          description: 'a plain text sentence or two describing the item'
        },
        image: {
          type: 'string',
          format: 'uri',
          description: 'the URL of the main image for the item'
        },
        banner_image: {
          type: 'string',
          format: 'uri',
          description: 'the URL of an image to use as a banner'
        },
        date_published: {
          type: 'string',
          format: 'date',
          description: 'specifies the date in RFC 3339 format'
        },
        date_modified: {
          type: 'string',
          format: 'date',
          description: 'specifies the modification date in RFC 3339 format'
        },
        author: {
          description: 'the author of the item',
          $ref: '#/definitions/author'
        },
        tags: {
          type: 'array',
          description: 'any plain text values you want',
          items: {
            type: 'string'
          }
        },
        attachments: {
          type: 'array',
          description: 'related resources (such as an audio or video file for a podcast)',
          items: {
            $ref: '#/definitions/attachment'
          }
        }
      },
      required: [ 'id' ],
      anyOf: [
				{ required: [ 'content_html' ] },
				{ required: [ 'content_text' ] }
      ]
    }
  }
};
