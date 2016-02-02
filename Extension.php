<?php

namespace Bolt\Extension\cdowdy\webfontloader;

use Bolt\Application;
use Bolt\BaseExtension;


class Extension extends BaseExtension
{

	public $currentVersion = '1.6.20';
	public $currentGoogleVersion = '1.6.16';
	public $currentJSDeliver = '1.6.20';
	public $currentCDNJS = '1.6.20';

	public function getName()
	{
		return "webfontloader";
	}


	public function initialize()
	{
		if ($this->app['config']->getWhichEnd() == 'frontend') {
			// Initialize the Twig function
			$this->addTwigFunction('webfont', 'twigWebfont');
		}
	}

	public function twigWebfont($fontService = '', $font_family = array())
	{

		$is_async = '';
		$asyncLoader = '';
		$custom_url = '';
		$font_deck_id = '';
		$project_id = '';
		$version = '';

		// load up twig template directory
		$this->app['twig.loader.filesystem']->addPath(__DIR__ . "/assets");

		/*
		Determine if the script should be loaded async.
		If not declared in the config assume it's a regular render blocking script
		*/

		// if async is not an empty value ( true and not false or nothing entered )
		if (!empty ($this->config['async'])) {
			$is_async = $this->config['async'];

			// if use_cdn is not empty ( true and not false or nothing entered )
			if (!empty ($this->config['use_cdn'])) {
				$cdn = strtolower($this->config['cdn']);
				$asyncLoader = $this->whichCDN($cdn);

			} else { // if false or nothing is entered use the current webfont loader version
				$asyncLoader = $this->getBaseUrl() . 'assets/js/' . $this->currentVersion . '/webfontloader.js';
			}
		} else { // all else fails fall back to regular webfont loader script insertion
			$this->webfontScript();
		}


		// Get the Font Service from the Config File. If no font is there throw an error
		if (isset($this->config['font_service'])) {
			$font_service = strtolower($this->config['font_service']);
		} else {
			return new \Twig_Markup('<b>No Font Service specified.</b>', 'UTF-8');
		}
		/**
		 * for the future... pass in font service and font families in the twig tag in the template
		 */
		/*
		if (empty($fontService)  && empty($this->config['font_service']) ) {

			 return new \Twig_Markup( '<b>No Font Service specified.</b>', 'UTF-8' );

		 } elseif (isset( $this->config['font_service'] )) {

			 $font_service = strtolower( $this->config['font_service'] );

		 } else {
			 $font_service = strtolower($fontService);
		 }
		*/

		// custom url's for custom fonts:
		if (isset($this->config['custom_url'])) {
			$custom_url = $this->config['custom_url'];
		}

		$fonts = $this->getFontFamilies($font_family);

		// Font Deck config settings
		if (isset ($this->config['font_deck_id'])) {
			$font_deck_id = $this->config['font_deck_id'];
		}

		// Fonts.com config settings
		if (isset ($this->config['projectID'])) {
			$project_id = $this->config['projectID'];
		}

		if (isset ($this->config['version'])) {
			$version = $this->config['version'];
		}

		$script = $this->app['render']->render('font-config.twig', array(
			'is_async' => $is_async,
			'async_loader' => $asyncLoader,
			'font_service' => $font_service,
			'font_families' => $fonts,
			'custom_url' => $custom_url,
			'font_deck_id' => $font_deck_id,
			'project_id' => $project_id,
			'version' => $version
		));

		return new \Twig_Markup($script, 'UTF-8');
	}

	function whichCDN($cdn)
	{

		switch ($cdn) {
			case 'google':
				$cdnLoader = 'https://ajax.googleapis.com/ajax/libs/webfont/' . $this->currentGoogleVersion . '/webfont.js';
				break;
			case 'jsdelivr':
				$cdnLoader = 'https://cdn.jsdelivr.net/webfontloader/' . $this->currentJSDeliver . '/webfontloader.js';
				break;
			case 'cdnjs':
				$cdnLoader = 'https://cdnjs.cloudflare.com/ajax/libs/webfont/' . $this->currentCDNJS . '/webfontloader.js';
				break;
			default:
				$cdnLoader = 'https://ajax.googleapis.com/ajax/libs/webfont/' . $this->currentGoogleVersion . '/webfont.js';
		}

		return $cdnLoader;
	}


	function getFontFamilies($fontFamily)
	{
		if (isset ($this->config['font_family'])) {

			$fontFamily = $this->config['font_family'];

			if (is_array($this->config['font_family'])) {

				$fontFamily = $this->config['font_family'];
			}
		}

		return $fontFamily;
	}

	/**
	 * This may need some tinkering.
	 */
	public function webfontScript()
	{
		// non cdn webfont script
		$webfontJS = $this->getBaseUrl() . 'assets/js/' . $this->currentVersion . '/webfontloader.js';
		$webfont = <<<WEBFONT
<script src="{$webfontJS}"></script>
WEBFONT;

		// cdn webfont script
		$cdn = $this->config['cdn'];
		$cdnLoader = $this->whichCDN($cdn);
		$cdnWebFont = <<<WEBFONT
<script src="{$cdnLoader}"></script>
WEBFONT;

		if (!empty ($this->config['use_cdn'])) {
			// insert snippet after the last CSS file in the head
			$this->addSnippet('afterheadcss', $cdnWebFont);
		} else {
			// insert snippet after the last CSS file in the head
			$this->addSnippet('afterheadcss', $webfont);
		}

	}


	protected function getDefaultConfig()
	{
		return array();
	}

}






