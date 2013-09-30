<?php if (!defined('SITE')) exit('No direct script access allowed');

/**
* Horizontal Format
*
* Exhbition format
* Originally created for SharoneLifschitz.com
* 
* @version 1.1
* @author Vaska 
*
* inner navigation
* modified Richard Khoury - richard@arteam.it
*/

$DO = new Horizontally;

$exhibit['exhibit'] = $DO->createExhibit();
$exhibit['dyn_css'] = $DO->dynamicCSS();
$exhibit['lib_js'] = array('thw.js');

class Horizontally
{
	// PADDING AND TEXT WIDTH ADJUSTMENTS UP HERE!!!
	var $picture_block_padding_right = 350; // distance between images
	var $text_width = 450; // text width
	var $text_padding_right = 250; // space at the end of page
	var $list = 200; // clickable list width
	var $final_img_container = 0; // do not adjust this one
	
	function createExhibit()
	{
		$OBJ =& get_instance();
		global $rs;
	
		$pages = $OBJ->db->fetchArray("SELECT * 
			FROM ".PX."media, ".PX."objects_prefs 
			WHERE media_ref_id = '$rs[id]' 
			AND obj_ref_type = 'exhibit' 
			AND obj_ref_type = media_obj_type 
			ORDER BY media_order ASC, media_id ASC");

		if (!$pages) return $rs['content'];
	
		$i = 1; $s = ''; $a = ''; $w = 0;
		
		$this->final_img_container = ($rs['content'] != '') ? ($this->text_padding_right + $this->text_width + $this->list) : 0;

		foreach ($pages as $go)
		{
			$title = ($go['media_title'] == '') ? '' : "<div class='title'>" . $go['media_title'] . "</div>";
			$title .= ($go['media_caption'] == '') ? '' : "<div class='caption'>" . $go['media_caption'] . "</div>";
		
			$temp_x = $go['media_x'] + $this->picture_block_padding_right;
			$this->final_img_container += ($go['media_x'] + $this->picture_block_padding_right);
		
			$next = ($i == $total) ? 1 : $i+1;
			$prev = ($i == 0) ? $total : $i-1;

			$t .= "<li><a href='#id_img$i' class='' style=''>" . $go['media_title'] . "</a></li>\n";

			$a .= "<div id='id_img$i' class='picture_holder' style='width: {$temp_x}px;'>\n";
			$a .= "<div class='sub_nav_wrap'>\n";
			$a .= "<span class='sub_nav'><a href='#menu' title='go left'>&lsaquo; left</a></span> | \n";
			$a .= "<span class='sub_nav'><a href='#id_img$prev'><b>&lsaquo; Prev</b></a></span> | \n";
			$a .= "<span class='sub_nav'><a href='#id_img$next'><b>Next &rsaquo;</b></a></span>\n";
			$a .= "</div>\n";
			$a .= "<div class='picture' style='width: {$go[media_x]}px;'>\n";
			$a .= "<img src='" . BASEURL . GIMGS . "/$go[media_file]' width='$go[media_x]' height='$go[media_y]' alt='" . $go['media_title'] . "' />\n";
			$a .= "<div class='captioning'>$title</div>\n";
			$a .= "</div>\n";
			$a .= "</div>\n\n";

		$i++;
		}
// delete or comment next line if you don't want the h1 title automatically appear
		$s .= "<h1><%title%></h1>\n";
		$s .= "<div id='img-container'>\n";
		$s .= "<div class='nav_scroll'>\n";
// delete or comment next line if you don't want the history.back navigation
		$s .= "<a class='back' href='javascript:history.back()' title='go back'> &laquo; back</a><span id='arrows'>\n";
		$s .= "<a id='left' href='#' title='scroll left'>&larr;</a>  scroll  <a id='right' href='#' title='scroll right'>&rarr;</a></span></div>\n";
		$s .= "<div style='clear: left;'><!-- --></div>\n";
// delete or comment next 3 lines if you don't want the clickable list navigation
		$s .= "<div id='list'><ul>\n";
		$s .= $t;
		$s .= "</ul></div>\n";
		if ($rs['content'] != '') $s .= "<div id='text'>" . $rs['content'] . "</div>\n";
		$s .= $a;
// delete or comment next line if you don't want the < go_left navigation at the end of the page
		$s .= "<span class='go_left'><a id='go' href='#menu' title='go left'>&lsaquo; left</a></span>\n";
		$s .= "<div style='clear: left;'><!-- --></div>\n";
		$s .= "</div>\n";
		return $s;
	}

// css to control page style and behaviour - adjust carefully!
	function dynamicCSS()
	{
		return "
				#img-container, h1 { width: " . ($this->final_img_container + 1) . "px; }
				#text { float: left; height: 88%; margin-top: 0; padding: 0; width: " . ($this->text_width) . "px; background: transparent; }
				#text h2 { margin-top: 0; padding: 0; }
				#img-container .picture_holder { float: left; margin-top: 0; }
				#img-container .picture { padding-top: .3em; }
				#img-container .picture img { margin-left: 250px; }
				#img-container .captioning .title { margin: .3em 0 0 250px; font-weight: bold; }
				#img-container .captioning .caption { margin: .3em 0 0 250px;}
				#list { float: left; display: block; width: " . ($this->list) . "px; height: 88%; padding: 1em 0 0 .2em; overflow: auto; }
				.go_left { position: absolute; left: " . ($this->final_img_container + 10) . "px; } 
				.sub_nav_wrap { position: relative; left: 250px; top: 0; }
				.sub_nav { background: transparent; padding: 0; }
				";
	}
}
