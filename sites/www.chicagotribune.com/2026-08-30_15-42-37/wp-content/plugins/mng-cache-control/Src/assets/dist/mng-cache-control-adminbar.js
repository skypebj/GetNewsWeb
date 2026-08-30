function MNG_Cache_Control_AdminBar( { rootUrl, rootAction, nonce, isSectionFront, isHomepage, termId, taxonomy, slug } ) {
  const LOGGER_PREFIX = '[MNG Cache Control AdminBar]';

  const initialize = () => {
    console.log( LOGGER_PREFIX, 'Initializing...' );

    const adminBar          = document.querySelector( '#wp-toolbar' );
    const cacheControlPanel = adminBar.querySelector( 'ul #wp-admin-bar-mng-cache-control-admin-bar-menu' );
    const invalidationTools = cacheControlPanel.querySelector( 'ul#wp-admin-bar-mng-cache-control__invalidation-tools' );
    const invalidationLinks = invalidationTools.querySelectorAll( 'li a' );

    invalidationLinks.forEach( ( link ) => {
      link.addEventListener( 'click', onInvalidationLinkClick );
    } );

    console.log( LOGGER_PREFIX, 'Successfully initialized' );
  };

  const handleHomepageQueryFlushClick = async () => {
    console.log( LOGGER_PREFIX, 'User wishes to flush the homepage query cache.' );

    doRequest( {
         cacheaction: 'flush_homepage_query_cache'
       } )
      .then( ( response ) => {
        if ( ! response.ok ) {
          throw new Error( `[MNG Cache Control] Failed to flush the homepage's query cache using the debug bar! ${response.statusText}` );
        }

        alert( 'Successfully flushed the homepage query cache. Please reload the page.' );
      } )
      .catch( ( error ) => {
        throw new Error( LOGGER_PREFIX + ` Failed to flush Section Query cache! ${error.message}` );
      } );
  };

  const handleSectionQueryFlushClick = () => {
    console.log( LOGGER_PREFIX, 'User wishes to flush this section front\'s query cache.' );

    doRequest( {
         cacheaction: 'flush_section_query_cache',
         term_id:     termId,
         taxonomy:    taxonomy,
         slug:        slug
       } )
      .then( ( response ) => {
        if ( ! response.ok ) {
          throw new Error( `[MNG Cache Control] Failed to flush this section\'s query cache using the debug bar! ${response.statusText}` );
        }

        alert( `Successfully flushed the section front cache for ${slug}! Please reload the page.` );
      } )
      .catch( ( error ) => {
        throw new Error( LOGGER_PREFIX + ` Failed to flush Section Query cache! ${error.message}` );
      } );
  };

  const onInvalidationLinkClick = ( event ) => {
    event.preventDefault();

    const target      = event.target;
    const targetTitle = event.target?.title;

    if ( targetTitle ) {
      switch( true ) {
        case targetTitle.includes( 'Homepage' ):
          handleHomepageQueryFlushClick();
          break;

        default:
          handleSectionQueryFlushClick();
          break;
      }
    }

    return false;
  };

  const doRequest = async ( requestParams ) => {
    const defaults = {
      action:      rootAction,
      _ajax_nonce: nonce,
    };

    requestParams = {
      ...requestParams,
      ...defaults
    };

    let formData = new FormData();
    Object.entries( requestParams ).forEach( ( [ key, value ] ) => {
      formData.append( key, value ); // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append
    } );

    return fetch( rootUrl, {
      method: 'POST',
      body:   new URLSearchParams( formData )
    } );
  };

  initialize();
}

document.addEventListener( 'DOMContentLoaded', () => {
  if ( 'interactive' === document.readyState ) {
    if ( window.cache_control_adminbar_support ) {
      MNG_Cache_Control_AdminBar( window.cache_control_adminbar_support );
    }
  }
} );
