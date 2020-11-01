import React from "react";
import "./Navbar/markdown.css";


class HelpPopup extends React.Component{
	constructor(props) {
		super(props);
	}
	
	// closePopup = () => {
	// 	this.props.closesignal(true);
	// }
	render(){
		console.log(this.props.close)
		return(
			<div className="markdown-body">
			{this.props.close ? <p id="leftfloater">
				<i class="fa fa-window-close" aria-hidden="true"></i>
			</p> : 
			<p id="leftfloater">
				Press <strong>"?"</strong> again to close the popup
			</p>  
			} 
			
			<h2 id="groff-cheatsheet">Groff Cheatsheet</h2>
			<p>The helpful GNU troff cheatsheet along with examples.</p>
			<hr />
			<h3 id="general">General</h3>
			<table>
				<thead>
					<tr>
						<th>Command</th>
						<th>Functionality</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>.RP [no]</td>
						<td>
							Prints cover page on its own. Can be avoided with
							<code>.RP no</code>
						</td>
					</tr>
					<tr>
						<td>.TL</td>
						<td>Title of the document</td>
					</tr>
					<tr>
						<td>.AU</td>
						<td>Author Name</td>
					</tr>
					<tr>
						<td>.AI</td>
						<td>Author Institution</td>
					</tr>
					<tr>
						<td>.AB [no] and .AE block</td>
						<td>
							Abstract beginning and end blocks.
							<code>.AB no</code> ensures the abstract keyword is
							silenced
						</td>
					</tr>
					<tr>
						<td>.DA [XXX]</td>
						<td>Current date on title page and footers</td>
					</tr>
					<tr>
						<td>.ND [XXX]</td>
						<td>Current date only on the title page</td>
					</tr>
					<tr>
						<td>.1C</td>
						<td>1 columned layout</td>
					</tr>
					<tr>
						<td>.2C</td>
						<td>2 columned layout</td>
					</tr>
					<tr>
						<td>.MC [WIDTH[GUTTER]]</td>
						<td>
							Multiple column layout (by default 2 with no args)
						</td>
					</tr>
					<tr>
						<td>.XS page_num and .XE</td>
						<td>Table of contents block</td>
					</tr>
					<tr>
						<td>.XA page_num</td>
						<td>Entry in the table of contents block</td>
					</tr>
					<tr>
						<td>.PX</td>
						<td>
							Print a manually-generated table of contents without
							resetting the page number.
						</td>
					</tr>
				</tbody>
			</table>
			<hr />
			<h3 id="text-formatting">Text Formatting</h3>
			<table>
				<thead>
					<tr>
						<th>Command</th>
						<th>Functionality</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>.B</td>
						<td>Bold</td>
					</tr>
					<tr>
						<td>.I</td>
						<td>Italics</td>
					</tr>
					<tr>
						<td>.BI</td>
						<td>Bold and Italics</td>
					</tr>
					<tr>
						<td>.P1</td>
						<td>
							Prints the header on page 1. The default is to
							suppress the header.
						</td>
					</tr>
					<tr>
						<td>.BX</td>
						<td>Box</td>
					</tr>
					<tr>
						<td>.UL</td>
						<td>Underline</td>
					</tr>
					<tr>
						<td>.LG</td>
						<td>
							Prints all text following in larger type (2 points
							larger than the current point size)
						</td>
					</tr>
					<tr>
						<td>.SM</td>
						<td>
							Prints all text following in smaller type (2 points
							smaller than the current point size)
						</td>
					</tr>
					<tr>
						<td>.NL</td>
						<td>
							Prints all text following in the normal point size
						</td>
					</tr>
					<tr>
						<td>.R</td>
						<td>
							Sets its first argument in roman (or regular) type.
							It operates similarly to the B macro otherwise.
						</td>
					</tr>
					<tr>
						<td>.CW</td>
						<td>
							Sets its first argument in italic type. It operates
							similarly to the B macro otherwise.
						</td>
					</tr>
				</tbody>
			</table>
			<hr />
			<h3 id="paragraph-formatting">Paragraph Formatting</h3>
			<table>
				<thead>
					<tr>
						<th>Command</th>
						<th>Functionality</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>.PP</td>
						<td>Standard paragraph</td>
					</tr>
					<tr>
						<td>.QP</td>
						<td>Quoted paragraph</td>
					</tr>
					<tr>
						<td>.XP</td>
						<td>
							The XP macro produces an exdented paragraph. The
							first line of the paragraph begins at the left
							margin, and subsequent lines are indented (the
							opposite of PP).
						</td>
					</tr>
					<tr>
						<td>.RS and .RE</td>
						<td>
							Start and end a section of indented text,
							respectively. The PI register controls the amount of
							indent.
						</td>
					</tr>
					<tr>
						<td>.IP</td>
						<td>
							List points. Use <code>.IP \(bu [width]</code> for
							bullet points with given width. Use{" "}
							<code>.IP [number]</code> for numbered points.
						</td>
					</tr>
					<tr>
						<td>.TA</td>
						<td>Tabbing</td>
					</tr>
				</tbody>
			</table>
			<hr />
			<h3 id="headings">Headings</h3>
			<table>
				<thead>
					<tr>
						<th>Command</th>
						<th>Functionality</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>.NH xxx</td>
						<td>
							Numbered heading where numbers specify levels of
							depth
						</td>
					</tr>
					<tr>
						<td>.SH xxx</td>
						<td>Section heading (un-numbered)</td>
					</tr>
					<tr>
						<td>.LH</td>
						<td>Left header</td>
					</tr>
					<tr>
						<td>.CH</td>
						<td>Center header</td>
					</tr>
					<tr>
						<td>.RH</td>
						<td>Right header</td>
					</tr>
					<tr>
						<td>.LF</td>
						<td>Left footer</td>
					</tr>
					<tr>
						<td>.CF</td>
						<td>Center footer</td>
					</tr>
					<tr>
						<td>.RF</td>
						<td>Right footer</td>
					</tr>
					<tr>
						<td>.OH</td>
						<td>
							Headers for odd pages. eg:
							<code>.OH &#39;left&#39;center&#39;right&#39;</code>
						</td>
					</tr>
					<tr>
						<td>.EH</td>
						<td>Headers for even pages.</td>
					</tr>
				</tbody>
			</table>
			<hr />
		</div>
	)
	}
}
export default HelpPopup;
