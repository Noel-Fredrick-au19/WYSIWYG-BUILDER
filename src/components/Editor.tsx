import React, { useEffect } from "react";
import $ from "jquery";
import FroalaEditor from "froala-editor";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/languages/en_ca.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "./Editor.css";

interface EditorProps {
  isPreview: boolean;
}

const Editor: React.FC<EditorProps> = ({ isPreview }) => {
  useEffect(() => {
    if (!isPreview) {
      $(document).ready(function () {
        const handleBlockClick = (event: JQuery.ClickEvent) => {
          const eleId = "id" + Date.now();
          let content =
            '<textarea id="' +
            eleId +
            '">This is a text block, edit the text here.</textarea>';
          let editorOptions: any = {
            initOnClick: true,
            toolbarInline: true,
            charCounterCount: false,
            toolbarVisibleWithoutSelection: true,
            events: {
              initialized: function () {
                (this as any).$tb[0].style.maxWidth = "400px";
              },
            },
          };

          const blockType = $(event.currentTarget).data("type");

          if (blockType === "title") {
            content = '<h1 id="' + eleId + '">Section Title</h1>';
            editorOptions = {
              initOnClick: true,
              toolbarInline: true,
              charCounterCount: false,
              toolbarVisibleWithoutSelection: true,
              paragraphFormatSelection: true,
              toolbarButtons: [
                "paragraphFormat",
                "fontSize",
                "fontFamily",
                "|",
                "textColor",
                "backgroundColor",
                "lineHeight",
                "align",
                "|",
                "bold",
                "italic",
                "underline",
                "|",
                "insertLink",
                "emoticons",
              ],
            };
          } else if (blockType === "image") {
            content =
              '<img id="' +
              eleId +
              '" src="https://fakeimg.pl/350x200/?text=Click%20on%20me" />';
            editorOptions = {};
          } else if (blockType === "button") {
            content = '<button id="' + eleId + '">Submit</button>';
          } else if (blockType === "link") {
            content = '<a id="' + eleId + '">link</a>';
          } else if (blockType === "cta") {
            content = '<a class="cta1" id="' + eleId + '">Learn More</a>';
            editorOptions = {
              initOnClick: true,
              linkStyles: {
                cta1: "Primary CTA",
                cta2: "Secondary CTA",
                centerCta: "Center",
              },
            };
          } else if (blockType === "code") {
            content = '<div class="codeblock" id="' + eleId + '"></div>';
            editorOptions = {
              pluginsEnabled: ["codeView", "codeBeautifier"],
              toolbarButtons: ["html"],
              events: {
                initialized: function () {
                  (this as any).codeView.toggle();
                },
                "codeView.update": function () {
                  (this as any).destroy();
                },
              },
            };
          } else if (blockType === "markdown") {
            content = '<div id="' + eleId + '"></div>';
            editorOptions = {
              toolbarInline: true,
              charCounterCount: false,
              toolbarVisibleWithoutSelection: true,
              pluginsEnabled: ["markdown"],
              toolbarButtons: [],
              events: {
                initialized: function () {
                  (this as any).markdown.toggle();
                },
              },
            };
          }

          $("#editing-area").append(
            "<div class='block'><i class='drag_btn'>&duarr;</i><i class='close_btn'>&#x2716;</i>" +
              content +
              "</div>"
          );

          new FroalaEditor("#" + eleId, editorOptions);
        };

        $(document)
          .off("click", ".block-source")
          .on("click", ".block-source", handleBlockClick);

        $(document).on("click", ".close_btn", function () {
          $(this).parent().remove();
        });

        $(document).on("dblclick", ".codeblock", function () {
          const eleId = $(this).attr("id");
          const editorOptions = {
            pluginsEnabled: ["codeView", "codeBeautifier"],
            toolbarButtons: ["html"],
            events: {
              initialized: function () {
                (this as any).codeView.toggle();
              },
              "codeView.update": function () {
                (this as any).destroy();
              },
            },
          };

          new FroalaEditor("#" + eleId, editorOptions);
        });

        // Ensure sortable is initialized
        if (typeof ($ as any).fn.sortable === "function") {
          ($("#editing-area") as any).sortable({
            handle: ".drag_btn",
          });
        }
      });
    }
  }, [isPreview]);

  if (isPreview) {
    const content = $("#editing-area").html() || "";
    return (
      <div
        className="editor-area"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    );
  }

  return <div id="editing-area" className="editor-area"></div>;
};

export default Editor;
