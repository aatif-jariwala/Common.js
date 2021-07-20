$(document).ready(function()
{
    $(".modal").modal({
        backdrop: 'static',
        keyboard: false
    });
});

function FormValidation()
{
    var flag = '1';
    $('.required').each(function() 
    {
        var ctr_val=$(this).val();
        if(ctr_val == '')
        {
            $(this).addClass('errorClass');
            flag = '0';
        }
        else
        {
            $(this).removeClass('errorClass');
        }
    });

    return flag;
}

function credintialValidation(form_id)
{
    var flag = '1';
    $('#' + form_id + ' .error_msg').remove();
    $(this).removeClass('errorClass');

    $('#' + form_id + ' .required').each(function () {
        var type = $(this).prop("type");
        var tagAddselect = " span ";
        validate_val = $.trim($(this).val());
        if (validate_val == '') 
        {
            if (type == "file") 
            {
                // $(this).next('.custom-file-label').addClass('errorClass');
            }

            $(this).addClass('errorClass');
            flag = '0';
        }
        else 
        {
            $(this).removeClass('errorClass');
            if (type == "file") 
            {
                // $(this).next('.custom-file-label').removeClass('errorClass');
            }
        }
    });

    /* Validation For Select2 Start */
    $('#' + form_id + ' .required_select2').each(function ()
    {
        validate_val = $.trim($(this).val());
        if(validate_val == '') 
        {
            $(this).parent().find('.select2-selection--multiple').addClass('errorClass');
            flag = '0';
        }
        else 
        {
            $(this).parent().find('.select2-selection--multiple').removeClass('errorClass');
        }
    });
    /* Validation For Select2 End */


    /* Validation For File Upload Start */
    $('#' + form_id + ' .required_file_group .required_file').each(function ()
    {
        var validate_file_val = $.trim($(this).val());
        var parent_unique_id = $(this).closest('.required_file_group').attr('id');
        
        if(validate_file_val=="") 
        {
            $('#'+parent_unique_id).find('.file-preview').addClass('errorClass');
            flag = '0';
        }
        else 
        {
            $('#'+parent_unique_id).find('.file-preview').removeClass('errorClass');
        }
    });
    /* Validation For File Upload End */

    /* Validation For CKE Editor (TextArea) Start */
    $('#' + form_id + ' .required_textarea').each(function ()
    {
        var textarea_id = $(this).attr('id');
        var textarea_val = CKEDITOR.instances[textarea_id].getData().length;
        var textarea_parent_unique_id = $(this).parent().attr('id');

        if(textarea_val=="" || textarea_val=='0')
        {
            $('#'+textarea_parent_unique_id).find('.cke_browser_webkit').addClass('errorClass');
            flag = '0';
        }
        else 
        {
            $('#'+textarea_parent_unique_id).find('.cke_browser_webkit').removeClass('errorClass');
        }
    });
    /* Validation For CKE Editor (TextArea) End */
    return flag;
}

function resetForm(Form_Id)
{
    if(Form_Id!='')
    {
        $('#'+Form_Id).find('input[type="text"]').each(function(){
            $(this).val('');
        });
        $('#'+Form_Id).find('input[type="radio"]').each(function(){
            $(this).prop('checked',false);
        });
        $('#'+Form_Id).find('select').each(function(){
            $(this).prop('selectedIndex', "");
        });        
    }
}