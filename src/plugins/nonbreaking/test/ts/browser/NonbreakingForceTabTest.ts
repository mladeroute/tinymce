import { Pipeline, Step, Keys, GeneralSteps, Logger, RawAssertions } from '@ephox/agar';
import { TinyActions, TinyApis, TinyLoader } from '@ephox/mcagar';
import { UnitTest } from '@ephox/bedrock';
import VK from 'tinymce/core/util/VK';
import NonbreakingPlugin from 'tinymce/plugins/nonbreaking/Plugin';
import ModernTheme from 'tinymce/themes/modern/Theme';


UnitTest.asynctest(
  'browser.tinymce.plugins.nonbreaking.NonbreakingForceTabTest',
  function() {
    var success = arguments[arguments.length - 2];
    var failure = arguments[arguments.length - 1];

    ModernTheme();
    NonbreakingPlugin();

    TinyLoader.setup(function (editor, onSuccess, onFailure) {
      var tinyApis = TinyApis(editor);
      var tinyActions = TinyActions(editor);

      Pipeline.async({}, [
        Logger.t('Undo level on insert tab', GeneralSteps.sequence([
          tinyActions.sContentKeystroke(Keys.tab(), {}),
          tinyApis.sAssertContent('<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'),
          Step.sync(function () {
            editor.undoManager.undo();
          }),
          tinyApis.sAssertContent('')
        ])),
        Logger.t('Prevent default and other handlers on insert tab', GeneralSteps.sequence([
          Step.sync(function () {
            var args = editor.fire('keydown', { keyCode: VK.TAB });
            RawAssertions.assertEq('Default should be prevented', true, args.isDefaultPrevented());
            RawAssertions.assertEq('Should not propagate', true, args.isImmediatePropagationStopped());
          })
        ]))
      ], onSuccess, onFailure);
    }, {
      plugins: 'nonbreaking',
      toolbar: 'nonbreaking',
      nonbreaking_force_tab: 5,
      skin_url: '/project/js/tinymce/skins/lightgray'
    }, success, failure);
  }
);